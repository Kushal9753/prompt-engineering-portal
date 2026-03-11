export const resources = [
  {
    category: "Official Documentation",
    icon: "📖",
    color: "blue",
    items: [
      {
        title: "OpenAI Prompt Engineering Guide",
        description: "Official best practices from OpenAI for working with GPT models — covers strategies, tactics, and example notebooks.",
        url: "https://platform.openai.com/docs/guides/prompt-engineering",
        badge: "Official",
        badgeColor: "blue",
      },
      {
        title: "Anthropic Prompt Library",
        description: "Claude's official prompt library with real-world examples for dozens of tasks from summarization to coding.",
        url: "https://docs.anthropic.com/en/prompt-library/library",
        badge: "Official",
        badgeColor: "purple",
      },
      {
        title: "Google Gemini Prompting Guide",
        description: "Google's guide to effective prompting for Gemini models, including multimodal prompts.",
        url: "https://ai.google.dev/gemini-api/docs/prompting-intro",
        badge: "Official",
        badgeColor: "blue",
      },
    ]
  },
  {
    category: "Learning Resources",
    icon: "🎓",
    color: "green",
    items: [
      {
        title: "LearnPrompting.org",
        description: "The most comprehensive free, open-source prompt engineering course. Covers beginner to advanced techniques with hands-on examples.",
        url: "https://learnprompting.org",
        badge: "Free",
        badgeColor: "green",
      },
      {
        title: "DeepLearning.AI Prompt Engineering Course",
        description: "A free short course by Andrew Ng and OpenAI that teaches prompt engineering for developers.",
        url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
        badge: "Free",
        badgeColor: "green",
      },
      {
        title: "Prompt Engineering Guide (DAIR.AI)",
        description: "An in-depth, research-backed guide covering all major prompting techniques with academic references.",
        url: "https://www.promptingguide.ai",
        badge: "Free",
        badgeColor: "green",
      },
      {
        title: "Microsoft Prompt Engineering Fundamentals",
        description: "Microsoft's course on Azure AI, covering foundational prompt engineering concepts in a structured curriculum.",
        url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering",
        badge: "Free",
        badgeColor: "green",
      },
    ]
  },
  {
    category: "AI Tools",
    icon: "🛠️",
    color: "orange",
    items: [
      {
        title: "ChatGPT",
        description: "OpenAI's flagship LLM-powered chatbot. The most popular tool to practice prompt engineering techniques.",
        url: "https://chat.openai.com",
        badge: "Freemium",
        badgeColor: "orange",
      },
      {
        title: "Claude by Anthropic",
        description: "Anthropic's AI assistant, known for longer context windows, nuanced reasoning, and thoughtful responses.",
        url: "https://claude.ai",
        badge: "Freemium",
        badgeColor: "purple",
      },
      {
        title: "Google AI Studio",
        description: "A free playground for experimenting with Gemini models, testing prompts, and building prototype AI apps.",
        url: "https://aistudio.google.com",
        badge: "Free",
        badgeColor: "blue",
      },
      {
        title: "PromptPerfect",
        description: "An AI-powered tool that automatically optimizes your prompts for better results across multiple LLMs.",
        url: "https://promptperfect.jina.ai",
        badge: "Freemium",
        badgeColor: "orange",
      },
      {
        title: "Vercel AI Playground",
        description: "Compare outputs from different AI models side-by-side with the same prompt — great for benchmarking.",
        url: "https://sdk.vercel.ai/playground",
        badge: "Free",
        badgeColor: "green",
      },
    ]
  },
  {
    category: "Research Papers",
    icon: "🔬",
    color: "purple",
    items: [
      {
        title: "Chain of Thought Prompting (Wei et al., 2022)",
        description: "The original Google Brain paper that introduced Chain-of-Thought prompting and showed it dramatically improves reasoning.",
        url: "https://arxiv.org/abs/2201.11903",
        badge: "Paper",
        badgeColor: "purple",
      },
      {
        title: "Large Language Models are Zero-Shot Reasoners",
        description: "The paper introducing the 'Let's think step by step' technique as a zero-shot CoT trigger phrase.",
        url: "https://arxiv.org/abs/2205.11916",
        badge: "Paper",
        badgeColor: "purple",
      },
      {
        title: "ReAct: Synergizing Reasoning and Acting in LLMs",
        description: "A technique that interleaves reasoning traces with action steps, forming the basis of modern AI agents.",
        url: "https://arxiv.org/abs/2210.03629",
        badge: "Paper",
        badgeColor: "purple",
      },
    ]
  },
];
