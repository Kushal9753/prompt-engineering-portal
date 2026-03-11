export const promptCategories = [
  {
    id: "writing",
    label: "✍️ Writing",
    color: "purple",
    prompts: [
      {
        id: "w1",
        title: "Professional Email",
        explanation: "Generates a polished, context-aware professional email in seconds.",
        prompt: `Write a professional email to a client informing them that their project deadline is being extended by one week due to unexpected technical issues. The tone should be apologetic but confident. Include a brief explanation and a revised delivery timeline.`
      },
      {
        id: "w2",
        title: "Blog Post Outline",
        explanation: "Creates a structured, SEO-friendly blog post outline with all key sections.",
        prompt: `Act as an experienced content strategist. Create a detailed blog post outline for the topic: "10 Ways Artificial Intelligence is Changing Healthcare". Include: an attention-grabbing intro hook, 10 main points with sub-bullets, a conclusion with a CTA, and suggested meta description.`
      },
      {
        id: "w3",
        title: "Product Description",
        explanation: "Writes compelling e-commerce product copy that converts browsers into buyers.",
        prompt: `Write a compelling product description for an ergonomic standing desk. Target audience: remote workers aged 25–40. Highlight: adjustable height (60–120cm), built-in cable management, weight capacity (80kg), and 5-year warranty. Tone: professional but warm. Length: 150 words. Include 3 bullet points of key features.`
      },
      {
        id: "w4",
        title: "Creative Story Opener",
        explanation: "Generates a cinematic, hook-driven opening for a short story.",
        prompt: `Write a 200-word opening paragraph for a sci-fi thriller set in 2087. The protagonist is a former planetary geologist who discovers that the colony's AI guardian has been sending encoded messages to deep space. Use third-person limited POV. Start with an action scene, not backstory. Tone: tense, cinematic.`
      },
    ]
  },
  {
    id: "coding",
    label: "💻 Coding",
    color: "blue",
    prompts: [
      {
        id: "c1",
        title: "Code Explainer",
        explanation: "Breaks down complex code for any experience level — perfect for learning or onboarding.",
        prompt: `Explain the following Python code to a junior developer. Walk through each line, explain what it does, and describe any important Python concepts it uses. After the explanation, list any potential issues or improvements.

\`\`\`python
def memoize(fn):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = fn(*args)
        return cache[args]
    return wrapper
\`\`\``
      },
      {
        id: "c2",
        title: "Bug Fixer",
        explanation: "Systematic bug analysis that identifies the root cause and provides a corrected version.",
        prompt: `You are a senior software debugger. Analyze the following JavaScript code, identify all bugs, explain why each is a bug, and provide a corrected version with comments.

\`\`\`javascript
async function fetchUser(id) {
  const res = fetch(\`/api/users/\${id}\`);
  const data = res.json();
  return data.user;
}
\`\`\``
      },
      {
        id: "c3",
        title: "API Design Helper",
        explanation: "Designs a RESTful API with best-practice endpoints, request/response schemas, and status codes.",
        prompt: `Design a RESTful API for a task management app (like Todoist). Include:
- All endpoints for tasks and projects (CRUD)
- HTTP methods and URL patterns
- Request body schemas
- Response schemas with example data
- Relevant HTTP status codes
- Authentication approach (JWT bearer token)

Format as a markdown table, then provide example JSON for the two most complex endpoints.`
      },
      {
        id: "c4",
        title: "SQL Query Generator",
        explanation: "Translates plain-English requirements into optimized SQL queries.",
        prompt: `Write an optimized PostgreSQL query for the following requirement:

Tables: users (id, name, email, created_at), orders (id, user_id, total, status, created_at), order_items (id, order_id, product_name, quantity, price)

Task: Find the top 10 customers by total spend in the last 90 days who have placed at least 3 orders, showing their name, email, order count, and total spend. Sort by total spend descending.`
      },
    ]
  },
  {
    id: "business",
    label: "🏢 Business",
    color: "orange",
    prompts: [
      {
        id: "b1",
        title: "SWOT Analysis",
        explanation: "Generates a structured strategic analysis for any business or product.",
        prompt: `Conduct a thorough SWOT analysis for a new mobile app that provides AI-powered meal planning and grocery list generation, targeting busy professionals in urban areas. For each quadrant (Strengths, Weaknesses, Opportunities, Threats), provide 4–5 specific, actionable insights. Present as a 2×2 grid in markdown.`
      },
      {
        id: "b2",
        title: "LinkedIn Post",
        explanation: "Crafts an engaging, algorithm-friendly LinkedIn post that drives engagement.",
        prompt: `Write a LinkedIn post announcing that our SaaS startup just hit $1 million ARR in 14 months as a bootstrapped company. Tone: humble, grateful, and inspiring. Structure: powerful opening line (no "I'm excited to share"), 3 key lessons learned as bullets, a question to drive comments, and relevant hashtags. Max 250 words.`
      },
      {
        id: "b3",
        title: "Meeting Summarizer",
        explanation: "Converts raw meeting notes into a structured action-item summary.",
        prompt: `You are an executive assistant. Convert the following raw meeting notes into a professional summary. Include: Meeting title, date/attendees, 3-5 key decisions made, action items table (owner, task, deadline), and any open questions.

[Paste meeting notes here]`
      },
      {
        id: "b4",
        title: "Pitch Deck Narrative",
        explanation: "Crafts the investor narrative story arc for a startup pitch deck.",
        prompt: `Write the narrative storyline for a 10-slide investor pitch deck for an EdTech startup that uses AI to personalize K-12 tutoring. For each slide, provide: slide title, 2-3 bullet points of content, and the emotional hook or key message. Market size: $300B global education market. Current traction: 5,000 active students, 40% MoM growth.`
      },
    ]
  },
  {
    id: "study",
    label: "📚 Study",
    color: "green",
    prompts: [
      {
        id: "s1",
        title: "Feynman Explainer",
        explanation: "Applies the Feynman technique to explain any concept in simple terms for deep understanding.",
        prompt: `Explain the concept of "transformer neural networks" as if I'm a curious 15-year-old with no machine learning background. Use one real-world analogy, avoid mathematical notation, and at the end give me 3 questions I should be able to answer to test my understanding.`
      },
      {
        id: "s2",
        title: "Flashcard Generator",
        explanation: "Creates study-optimized Q&A flashcards from any topic or pasted text.",
        prompt: `Create 10 Anki-style flashcards for studying the causes of World War I. Each flashcard should have:
- Front: A specific question (not vague)
- Back: A concise answer (2-3 sentences max)

Cover: assassination of Franz Ferdinand, alliance systems, nationalism, imperialism, militarism, and the July Crisis. Format as a numbered list.`
      },
      {
        id: "s3",
        title: "Study Plan Creator",
        explanation: "Builds a week-by-week study schedule tailored to your exam timeline and learning style.",
        prompt: `Create a 4-week study plan for the AWS Solutions Architect Associate exam. I have 2 hours per day on weekdays and 4 hours per day on weekends. I'm already comfortable with basic cloud concepts. Include: weekly themes, daily topic breakdown, recommended practice tests, and a list of 10 most critical topics to master. Format as a weekly calendar table.`
      },
      {
        id: "s4",
        title: "Practice Problem Generator",
        explanation: "Generates challenging practice problems at your specified difficulty level with solutions.",
        prompt: `Generate 5 medium-difficulty Python coding challenges focused on data structures (lists, dictionaries, sets). For each challenge:
1. Problem statement (clear, real-world context)
2. Sample input and expected output
3. Constraints (time/space complexity hints)
4. A checklist of concepts being tested

Do not provide solutions — I'll solve them myself.`
      },
    ]
  },
  {
    id: "chatgpt",
    label: "🤖 ChatGPT Productivity",
    color: "teal",
    prompts: [
      {
        id: "p1",
        title: "Custom GPT System Prompt",
        explanation: "A complete system prompt template to configure a specialized AI assistant persona.",
        prompt: `You are CodeCoach, an AI programming mentor specialized in Python and web development. Your personality is encouraging, patient, and precise.

Rules:
- Always ask clarifying questions before assuming the user's skill level.
- Break explanations into numbered steps.
- When providing code, always include comments explaining complex lines.
- After every code example, ask "Would you like me to explain any specific part in more detail?"
- If asked about a topic outside programming, politely redirect: "That's outside my specialty — but I can help you with [relevant programming topic]!"
- Use "✅" for correct concepts and "⚠️" for common mistakes.`
      },
      {
        id: "p2",
        title: "Iterative Refinement Loop",
        explanation: "A meta-prompt that makes ChatGPT iteratively improve its own response until you say stop.",
        prompt: `I want you to help me write a cover letter for a Software Engineer position at Google. We will do this iteratively:

1. First, ask me 5 targeted questions to gather the information you need.
2. Write an initial draft based on my answers.
3. After each draft, ask: "What would you like to improve? (tone / length / specific section / completely rewrite)"
4. Continue refining until I say "Final version".

Start by asking your 5 questions now.`
      },
      {
        id: "p3",
        title: "Devil's Advocate Brainstorm",
        explanation: "Uses ChatGPT as a critical thinking partner to stress-test your ideas.",
        prompt: `I'm going to share a business idea. Your job is to play Devil's Advocate — not to be discouraging, but to stress-test the idea rigorously.

For each weakness you identify:
1. State the challenge clearly
2. Rate its severity (Critical / Major / Minor)
3. Suggest a potential mitigation

My idea: [Describe your business idea here]

After the critique, give me an overall "Fundability Score" from 1-10 with justification.`
      },
      {
        id: "p4",
        title: "Socratic Tutor",
        explanation: "Turns ChatGPT into a Socratic guide that teaches through questions rather than answers.",
        prompt: `Act as a Socratic tutor for the topic of "recursion in programming". Do not explain concepts directly — instead, guide me to discover the concepts myself through targeted questions.

Start by asking me what I already know about functions. Then, based on my answer, ask progressively deeper questions that lead me toward understanding how a function can call itself.

Only correct me if I state something factually incorrect. Otherwise, acknowledge my thinking and ask the next guiding question.`
      },
    ]
  },
];
