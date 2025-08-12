import Typewriter from "typewriter-effect";

export default function CodeMockup() {
  return (
    <div className="mockup-code-container">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<pre data-prefix="1"><code class="text-green-800"><!-- Welcome snippet --></code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="3"><code>&lt;<span class="text-accent">html</span> lang="en"&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="4"><code>&lt;<span class="text-accent">head</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="5"><code>\t&lt;<span class="text-accent">meta</span> charset="UTF-8" /&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="6"><code>\t&lt;<span class="text-accent">title</span>&gt;Welcome!&lt;/<span class="text-accent">title</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="7"><code>&lt;/<span class="text-accent">head</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="8"><code>&lt;<span class="text-accent">body</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="9"><code>\t&lt;<span class="text-accent">h1</span>&gt;Hello, visitor!&lt;/<span class="text-accent">h1</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="10"><code>\t&lt;<span class="text-accent">p</span>&gt;This is where ideas come to life.&lt;/<span class="text-accent">p</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="11"><code>\t&lt;<span class="text-accent">ul</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="12"><code>\t\t&lt;<span class="text-accent">li</span>&gt;Code&lt;/<span class="text-accent">li</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="13"><code>\t\t&lt;<span class="text-accent">li</span>&gt;Creativity&lt;/<span class="text-accent">li</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="14"><code>\t\t&lt;<span class="text-accent">li</span>&gt;Innovation&lt;/<span class="text-accent">li</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="15"><code>\t&lt;/<span class="text-accent">ul</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="16"><code><span class="text-green-800"><!-- Thanks for stopping by! --></span></code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="17"><code>&lt;/<span class="text-accent">body</span>&gt;</code></pre>`
            )
            .pauseFor(50)
            .typeString(
              `<pre data-prefix="18"><code>&lt;/<span class="text-accent">html</span>&gt;</code></pre>`
            )
            .start();
        }}
        options={{
          cursor: "",
          delay: 10,
        }}
      />
    </div>
  );
}
