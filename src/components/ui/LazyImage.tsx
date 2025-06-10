import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type ImgHTMLAttributes,
} from "react";

/**
 * Интерфейс пропсов для компонента LazyImage
 * Расширяет стандартные HTML атрибуты для img элемента
 */
interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string; // Основной URL изображения (обязательный)
  alt: string; // Альтернативный текст для изображения (обязательный)
  placeholder?: string; // URL изображения-заглушки, показывается до загрузки основного
  fallback?: string; // URL резервного изображения, показывается при ошибке загрузки
  threshold?: number; // Порог видимости для Intersection Observer (0-1)
  rootMargin?: string; // Отступ для срабатывания загрузки (например, "50px")
  onLoad?: () => void; // Колбэк, вызывается при успешной загрузке изображения
  onError?: () => void; // Колбэк, вызывается при ошибке загрузки
  className?: string; // Дополнительные CSS классы
  blurDataURL?: string; // Base64 размытое изображение для плавного появления
  priority?: boolean; // Если true, изображение загружается сразу (для важных изображений)
}

export default function LazyImage({
  src,
  alt,
  placeholder,
  fallback,
  threshold = 0.1, // По умолчанию загружаем когда 10% изображения видно
  rootMargin = "50px", // Начинаем загрузку за 50px до появления в viewport
  onLoad,
  onError,
  className = "",
  blurDataURL,
  priority = false, // По умолчанию используем ленивую загрузку
  ...props // Остальные пропсы передаются в img элемент
}: LazyImageProps) {
  // === СОСТОЯНИЯ КОМПОНЕНТА ===
  const [isLoaded, setIsLoaded] = useState(false); // Загружено ли изображение
  const [isInView, setIsInView] = useState(priority); // Видно ли изображение в viewport
  const [hasError, setHasError] = useState(false); // Произошла ли ошибка при загрузке
  const [imageSrc, setImageSrc] = useState(placeholder || blurDataURL || ""); // Текущий src изображения

  // === РЕФЫ ===
  const imgRef = useRef<HTMLImageElement>(null); // Ссылка на img элемент
  const observerRef = useRef<IntersectionObserver | null>(null); // Ссылка на Intersection Observer

  // === ОБРАБОТЧИКИ СОБЫТИЙ ===

  /**
   * Обработчик успешной загрузки изображения
   * useCallback предотвращает лишние перерендеры
   */
  const handleLoad = useCallback(() => {
    setIsLoaded(true); // Помечаем изображение как загруженное
    onLoad?.(); // Вызываем внешний колбэк если он есть
  }, [onLoad]);

  /**
   * Обработчик ошибки загрузки изображения
   */
  const handleError = useCallback(() => {
    setHasError(true); // Помечаем что произошла ошибка
    if (fallback) {
      setImageSrc(fallback); // Показываем резервное изображение если оно есть
    }
    onError?.(); // Вызываем внешний колбэк если он есть
  }, [fallback, onError]);

  // === ЭФФЕКТЫ ===

  /**
   * Настройка Intersection Observer для отслеживания видимости изображения
   * Этот эффект создает "наблюдателя", который следит за тем, когда изображение
   * появляется в области видимости пользователя
   */
  useEffect(() => {
    // Если изображение приоритетное, пропускаем наблюдателя
    if (priority) return;

    const currentImg = imgRef.current;
    if (!currentImg) return; // Если элемент еще не создан, выходим

    // Создаем Intersection Observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Когда изображение появляется в viewport
        if (entry.isIntersecting) {
          setIsInView(true); // Помечаем как видимое
          observerRef.current?.unobserve(currentImg); // Прекращаем наблюдение
        }
      },
      {
        threshold, // Какая часть элемента должна быть видна (0.1 = 10%)
        rootMargin, // Отступ для срабатывания ("50px" = за 50px до появления)
      }
    );

    // Начинаем наблюдение за изображением
    observerRef.current.observe(currentImg);

    // Функция очистки при размонтировании компонента
    return () => {
      if (observerRef.current && currentImg) {
        observerRef.current.unobserve(currentImg);
      }
    };
  }, [threshold, rootMargin, priority]);

  /**
   * Загрузка основного изображения когда оно становится видимым
   * Этот эффект заменяет placeholder на настоящее изображение
   */
  useEffect(() => {
    if (isInView && !hasError) {
      setImageSrc(src); // Устанавливаем настоящий URL изображения
    }
  }, [isInView, src, hasError]);

  /**
   * Очистка observer при размонтировании компонента
   * Предотвращает утечки памяти
   */
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // === СТИЛИ ===

  /**
   * CSS классы для изображения
   * Включают плавный переход прозрачности и пользовательские классы
   */
  const imageClasses = `
    transition-opacity duration-300 ease-in-out
    ${isLoaded ? "opacity-100" : "opacity-0"}
    ${className}
  `.trim();

  /**
   * CSS классы для контейнера
   * Добавляют анимацию пульсации во время загрузки
   */

  // === РЕНДЕР ===
  return (
    <>
      {/* Основное изображение */}
      <img
        ref={imgRef} // Ссылка для observer
        src={imageSrc} // Текущий источник изображения
        alt={alt} // Альтернативный текст
        className={imageClasses} // CSS классы
        onLoad={handleLoad} // Обработчик загрузки
        onError={handleError} // Обработчик ошибки
        loading={priority ? "eager" : "lazy"} // Стратегия загрузки браузера
        decoding="async" // Асинхронное декодирование
        {...props} // Остальные пропсы
      />

      {/* Индикатор загрузки - показывается пока изображение грузится */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Крутящийся спиннер */}
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Состояние ошибки - показывается если изображение не загрузилось и нет fallback */}
      {hasError && !fallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500">
          {/* Иконка поломанного изображения */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
    </>
  );
}

/**
 * === КАК РАБОТАЕТ КОМПОНЕНТ ===
 *
 * 1. ИНИЦИАЛИЗАЦИЯ:
 *    - Компонент создается с placeholder изображением или пустым src
 *    - Если priority=true, изображение загружается сразу
 *    - Если priority=false, создается Intersection Observer
 *
 * 2. ОТСЛЕЖИВАНИЕ ВИДИМОСТИ:
 *    - Intersection Observer следит за появлением изображения в viewport
 *    - Когда изображение становится видимым (с учетом threshold и rootMargin),
 *      устанавливается isInView=true
 *
 * 3. ЗАГРУЗКА:
 *    - Когда isInView=true, src изображения меняется на настоящий URL
 *    - Браузер начинает загружать изображение
 *    - Показывается спиннер загрузки
 *
 * 4. ЗАВЕРШЕНИЕ:
 *    - При успешной загрузке: isLoaded=true, изображение плавно появляется
 *    - При ошибке: hasError=true, показывается fallback или иконка ошибки
 *
 * 5. ОЧИСТКА:
 *    - При размонтировании компонента все observer'ы отключаются
 *    - Предотвращаются утечки памяти
 */
