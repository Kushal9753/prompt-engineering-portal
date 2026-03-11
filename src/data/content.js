export const topicsData = [
  // ── BASICS ─────────────────────────────────────────────────────────────
  {
    id: "what-is-prompt-engineering",
    category: "Basics",
    title: "1. What is Prompt Engineering?",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Introduction to Prompt Engineering</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">
        <strong>Prompt Engineering</strong> is the practice of designing and refining the text inputs (called <em>prompts</em>) that you send to large language models (LLMs) such as ChatGPT, Gemini, or Claude. It is not simply about typing a question — it is about structuring <strong>context</strong>, <strong>constraints</strong>, and <strong>instructions</strong> in a way that reliably produces accurate, useful, and well-formatted output.
      </p>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">
        Think of an LLM as an incredibly powerful but literal assistant. It will do exactly what you describe, so the quality of your description determines the quality of the result.
      </p>
      <h3 class="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">Why is Prompt Engineering important?</h3>
      <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-400 space-y-2">
        <li>Dramatically improves the accuracy and relevance of AI responses.</li>
        <li>Reduces <em>hallucinations</em> — instances where the AI confidently states incorrect facts.</li>
        <li>Saves time by getting the right answer on the first attempt.</li>
        <li>Unlocks advanced reasoning abilities like step-by-step problem solving.</li>
        <li>Enables automation of complex writing, coding, and analysis tasks.</li>
      </ul>
      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Who uses Prompt Engineering?</h3>
      <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p class="font-semibold text-green-800 dark:text-green-300 mb-1">🧑‍💻 Developers</p>
          <p class="text-gray-600 dark:text-gray-400">Building AI-powered apps, chatbots, and automation pipelines.</p>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p class="font-semibold text-blue-800 dark:text-blue-300 mb-1">✍️ Content Creators</p>
          <p class="text-gray-600 dark:text-gray-400">Generating articles, marketing copy, and creative writing.</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <p class="font-semibold text-purple-800 dark:text-purple-300 mb-1">🔬 Researchers</p>
          <p class="text-gray-600 dark:text-gray-400">Using LLMs for data analysis, summarization, and literature review.</p>
        </div>
        <div class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <p class="font-semibold text-orange-800 dark:text-orange-300 mb-1">🏢 Business Analysts</p>
          <p class="text-gray-600 dark:text-gray-400">Automating reports, emails, and customer support responses.</p>
        </div>
      </div>
    `
  },
  {
    id: "elements-of-a-prompt",
    category: "Basics",
    title: "2. Core Elements of a Prompt",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Core Elements of an Effective Prompt</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">A well-structured prompt typically contains four key elements. You don't always need all four, but using more of them significantly improves output quality.</p>

      <div class="space-y-4 mb-8">
        <div class="flex gap-4 p-4 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg shadow-sm">
          <span class="text-2xl">📋</span>
          <div>
            <p class="font-semibold text-gfg-green dark:text-green-400">1. Instruction</p>
            <p class="text-gray-600 dark:text-gray-400 text-sm">The specific task you want the AI to perform. Be direct and action-oriented. <em>Example: "Summarize the following text in 3 bullet points."</em></p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg shadow-sm">
          <span class="text-2xl">🗺️</span>
          <div>
            <p class="font-semibold text-gfg-green dark:text-green-400">2. Context</p>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Background info to guide the model's behavior. <em>Example: "You are a senior software engineer reviewing junior code."</em></p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg shadow-sm">
          <span class="text-2xl">📄</span>
          <div>
            <p class="font-semibold text-gfg-green dark:text-green-400">3. Input Data</p>
            <p class="text-gray-600 dark:text-gray-400 text-sm">The actual data, article, code, or text the model needs to process. <em>Example: "[paste the article here]"</em></p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg shadow-sm">
          <span class="text-2xl">🎯</span>
          <div>
            <p class="font-semibold text-gfg-green dark:text-green-400">4. Output Indicator</p>
            <p class="text-gray-600 dark:text-gray-400 text-sm">The desired format. <em>Example: "Return the result as a JSON object with keys: summary, keywords, sentiment."</em></p>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Combined Example</h3>
      <div class="code-block mb-4">Act as a senior copywriter (Context).
Summarize the following text (Instruction) into 3 bullet points using simple language (Output Indicator).

Text: [Insert your article here] (Input Data)</div>
    `
  },
  {
    id: "how-ai-understands-prompts",
    category: "Basics",
    title: "3. How AI Understands Prompts",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">How AI Models Understand Prompts</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">LLMs like GPT-4 and Gemini are <strong>token prediction machines</strong>. They don't "understand" your prompt in the way a human does — they predict the most statistically likely sequence of tokens (words/subwords) that should follow your input, based on patterns learned from billions of documents.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">What is a token?</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-400">A token is roughly 3–4 characters or about 0.75 words. The sentence <em>"I love prompt engineering"</em> is approximately 5 tokens.</p>

      <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
        <p class="font-semibold text-amber-800 dark:text-amber-300 mb-2">⚡ Key Insight: Context Window</p>
        <p class="text-gray-700 dark:text-gray-400 text-sm">Models have a limited <strong>context window</strong> (e.g., 128k tokens for GPT-4o). Everything you put in the prompt — including conversation history — counts toward this limit. Prioritize the most relevant information at the beginning and end of your prompt.</p>
      </div>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Practical implications for prompting</h3>
      <ul class="list-disc pl-6 text-gray-700 dark:text-gray-400 space-y-2 mb-6">
        <li><strong>Order matters:</strong> Instructions placed early in the prompt carry more weight.</li>
        <li><strong>Specificity beats brevity:</strong> More detailed prompts yield more precise outputs.</li>
        <li><strong>Formatting guides the model:</strong> If you use numbered lists or headers in your prompt, the model is more likely to mirror that structure.</li>
        <li><strong>Role-setting works:</strong> Saying "You are a Python expert" shifts the model toward expert-level vocabulary and patterns.</li>
      </ul>
    `
  },

  // ── TECHNIQUES ─────────────────────────────────────────────────────────
  {
    id: "zero-and-few-shot-prompting",
    category: "Techniques",
    title: "4. Zero-Shot & Few-Shot Prompting",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Zero-Shot &amp; Few-Shot Prompting</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">These are foundational techniques that control how many examples you provide to guide the model's behavior.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">Zero-Shot Prompting</h3>
      <p class="mb-3 text-gray-700 dark:text-gray-400">Asking the model to complete a task <strong>without any examples</strong>. Works well for simple tasks.</p>
      <div class="code-block mb-2">Classify the sentiment of this review:
"I absolutely love the new dashboard — it's intuitive and fast!"</div>
      <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3 mb-6 text-sm text-green-800 dark:text-green-300">
        ✅ <strong>AI Response:</strong> Positive
      </div>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Few-Shot Prompting</h3>
      <p class="mb-3 text-gray-700 dark:text-gray-400">Providing a small number of <strong>input → output examples</strong> before the actual question to teach the model the pattern you want.</p>
      <div class="code-block mb-2">Classify the sentiment:

review: "The product is amazing!" → sentiment: Positive
review: "Worst purchase ever."    → sentiment: Negative
review: "It's okay, not great."   → sentiment: Neutral
review: "Battery life is superb!" → sentiment:</div>
      <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3 mb-6 text-sm text-green-800 dark:text-green-300">
        ✅ <strong>AI Response:</strong> Positive
      </div>

      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p class="font-semibold text-blue-800 dark:text-blue-300 mb-1">💡 When to use which?</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">Use <strong>zero-shot</strong> for general tasks and questions. Use <strong>few-shot</strong> when the format or style is specific and needs to be demonstrated.</p>
      </div>
    `
  },
  {
    id: "chain-of-thought",
    category: "Techniques",
    title: "5. Chain of Thought (CoT)",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Chain of Thought (CoT) Prompting</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">Chain of Thought prompting forces the AI to <strong>reason step-by-step</strong> before arriving at a final answer. This dramatically improves performance on arithmetic, logic, and multi-step reasoning tasks.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">Basic CoT — just add the magic phrase</h3>
      <div class="code-block mb-4">I have 5 apples. I buy 2 more bags of 6 apples each.
Then I give a third of all my apples to my friend.
How many apples do I have?

Let's think step by step.</div>

      <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 text-sm">
        <p class="font-semibold text-green-800 dark:text-green-300 mb-2">✅ AI thinks aloud:</p>
        <p class="text-gray-600 dark:text-gray-400">1. Start: 5 apples<br/>2. Buy 2 bags × 6 = 12 more → total 17<br/>3. Give away 17 ÷ 3 ≈ 5 → keep 12<br/><strong>Answer: 12 apples</strong></p>
      </div>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Zero-Shot CoT Trigger Phrases</h3>
      <ul class="list-disc pl-6 text-gray-700 dark:text-gray-400 space-y-1 mb-4">
        <li><code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">"Let's think step by step."</code></li>
        <li><code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">"Walk me through your reasoning."</code></li>
        <li><code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">"Think carefully before answering."</code></li>
        <li><code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">"Reason about this problem systematically."</code></li>
      </ul>
    `
  },
  {
    id: "role-prompting",
    category: "Techniques",
    title: "6. Role Prompting",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Role Prompting</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">Assign the AI a specific <strong>persona or expert role</strong> at the start of your prompt. This anchors the model's vocabulary, tone, and level of detail to that persona's domain.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">Template</h3>
      <div class="code-block mb-6">You are a [ROLE]. [Context about the situation].
Your task is to [INSTRUCTION].
[Input Data]
[Output Indicator]</div>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Examples</h3>
      <div class="space-y-4">
        <div class="border border-gray-200 dark:border-dark-border rounded-lg overflow-hidden">
          <div class="bg-gray-50 dark:bg-dark-card px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Code Review</div>
          <div class="code-block rounded-none">You are a senior Python engineer at Google.
Review the following code for bugs, performance issues,
and PEP-8 violations. Be concise and list each issue:

[paste code here]</div>
        </div>
        <div class="border border-gray-200 dark:border-dark-border rounded-lg overflow-hidden">
          <div class="bg-gray-50 dark:bg-dark-card px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Teacher Role</div>
          <div class="code-block rounded-none">You are a patient middle-school math teacher.
Explain the Pythagorean theorem to a 12-year-old
using three real-world examples. Avoid jargon.</div>
        </div>
      </div>
    `
  },
  {
    id: "step-by-step-prompting",
    category: "Techniques",
    title: "7. Step-by-Step Reasoning",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Step-by-Step Reasoning Prompts</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">Beyond Chain of Thought, you can explicitly provide a <strong>numbered workflow</strong> for the model to follow. This is particularly powerful for multi-stage tasks like writing, debugging, or analysis.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">Example: Essay Writing Workflow</h3>
      <div class="code-block mb-6">Write a 500-word essay about climate change. Follow these steps:

Step 1: Write a compelling hook about recent extreme weather events.
Step 2: State the thesis: "Human activity is the primary driver of climate change."
Step 3: Provide 3 supporting arguments with data.
Step 4: Address one counterargument and rebut it.
Step 5: Conclude with a call to action for readers.

Output format: Use numbered headings for each step.</div>

      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p class="font-semibold text-blue-800 dark:text-blue-300 mb-2">🚀 Pro Tip: Self-Critique Loop</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">Add a final step: <em>"Step 6: Review your answer for factual errors and rewrite any weak sentences."</em> This makes the model self-edit before giving you the final result.</p>
      </div>
    `
  },

  // ── ADVANCED ──────────────────────────────────────────────────────────
  {
    id: "prompt-chaining",
    category: "Advanced",
    title: "8. Prompt Chaining",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Prompt Chaining</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed"><strong>Prompt Chaining</strong> is the technique of breaking down a large, complex task into multiple smaller prompts, where the output of one prompt becomes the input of the next. This mirrors how a software pipeline works.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">Example: Blog Post Pipeline</h3>
      <div class="space-y-3 mb-6">
        <div class="code-block">Prompt 1: Generate 5 compelling headline ideas for a blog post about "AI in Healthcare".</div>
        <div class="text-center text-gray-400 dark:text-gray-500 font-mono">↓ use output as input</div>
        <div class="code-block">Prompt 2: Using the headline "[chosen headline]", write a 300-word blog outline with 5 sections.</div>
        <div class="text-center text-gray-400 dark:text-gray-500 font-mono">↓ use output as input</div>
        <div class="code-block">Prompt 3: Expand section 2 of the outline into a full 200-word paragraph with two cited statistics.</div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p class="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Advantages</p>
          <ul class="text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1">
            <li>Breaks complex tasks into manageable parts</li>
            <li>Each step can be reviewed and corrected</li>
            <li>Reduces hallucination on long outputs</li>
          </ul>
        </div>
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p class="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ Watch Out</p>
          <ul class="text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1">
            <li>Errors in early steps compound later</li>
            <li>More API calls = higher cost</li>
            <li>Requires careful handoff between steps</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: "constrained-output",
    category: "Advanced",
    title: "9. Constrained Output Formats",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Constrained Output Formats</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">Controlling the <strong>exact format</strong> of AI output is crucial for downstream use — especially for APIs, databases, and automated workflows.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">JSON Output</h3>
      <div class="code-block mb-4">Extract the following information from this email and return it as valid JSON only. No extra text.

Email: "Hi, I'm John Smith. Please schedule a meeting on March 15 at 2pm regarding Project Apollo."

Schema:
{
  "name": string,
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "topic": string
}</div>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Table Output</h3>
      <div class="code-block mb-4">Compare Python, JavaScript, and Go across these criteria:
- Typing system
- Primary use case
- Performance

Format as a markdown table with clear headers.</div>

      <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
        <p class="font-semibold text-amber-800 dark:text-amber-300 mb-2">💡 Pro Tips for Structured Output</p>
        <ul class="text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1">
          <li>Say <strong>"Return only valid JSON, no other text"</strong> to prevent preamble.</li>
          <li>Provide a schema or example object so the model mirrors your structure.</li>
          <li>For OpenAI API, use the <code>response_format: { type: "json_object" }</code> parameter.</li>
        </ul>
      </div>
    `
  },
  {
    id: "prompt-anti-patterns",
    category: "Advanced",
    title: "10. Common Prompt Anti-Patterns",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Common Prompt Anti-Patterns</h2>
      <p class="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">Avoid these common mistakes that cause poor AI outputs.</p>

      <div class="space-y-6">
        <div class="border-l-4 border-red-400 dark:border-red-600 pl-4">
          <p class="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Vague Instructions</p>
          <div class="code-block text-xs mb-2">Write something about dogs.</div>
          <div class="code-block text-xs">Write a 150-word fun fact article about Golden Retrievers for a dog-lovers blog. Use an upbeat, friendly tone and include one surprising statistic.</div>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">→ Add specificity: length, audience, tone, format.</p>
        </div>

        <div class="border-l-4 border-red-400 dark:border-red-600 pl-4">
          <p class="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Asking Multiple Unrelated Questions</p>
          <div class="code-block text-xs mb-2">What is machine learning? Also write me a poem about the moon. And what's the capital of France?</div>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">→ Send each question in a separate, focused prompt.</p>
        </div>

        <div class="border-l-4 border-red-400 dark:border-red-600 pl-4">
          <p class="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Negative-Only Instructions</p>
          <div class="code-block text-xs mb-2">Don't use technical jargon. Don't be too long. Don't be boring.</div>
          <div class="code-block text-xs">Use simple everyday language. Keep the response under 100 words. Use an engaging, conversational tone.</div>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">→ Reframe negatives as positive instructions.</p>
        </div>

        <div class="border-l-4 border-red-400 dark:border-red-600 pl-4">
          <p class="font-semibold text-red-700 dark:text-red-400 mb-1">❌ No Output Format Specified</p>
          <p class="text-xs text-gray-500 dark:text-gray-500">Always specify if you want JSON, a bullet list, a table, paragraphs, or code. Models default to prose otherwise.</p>
        </div>
      </div>
    `
  },
];