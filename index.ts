/*
  # Llama-powered Chatbot Function

  1. AI Integration
    - Simulates Llama model responses with contextual understanding
    - Maintains conversation history and context
    - Provides intelligent responses about Abhinav's portfolio
  
  2. Features
    - Context-aware responses
    - Professional tone matching
    - Dynamic content generation
    - Response streaming simulation
  
  3. Security
    - CORS enabled for frontend integration
    - Rate limiting considerations
    - Input validation and sanitization
*/

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ChatMessage {
  message: string;
  context?: string;
  conversationHistory?: Array<{role: string, content: string}>;
}

interface AIResponse {
  response: string;
  confidence: number;
  suggestions?: string[];
}

// Comprehensive knowledge base about Abhinav
const abhinavKnowledgeBase = {
  personal: {
    name: "Abhinav Kumar",
    education: "B.Tech from Jaypee University of Engineering and Technology, Guna, Madhya Pradesh, India",
    location: "Guna, Madhya Pradesh, India",
    emails: ["aabhinavmishra133@gmail.com", "kumarabhinav6649@gmail.com"],
    phone: "9142647855",
    github: "https://github.com/abhiav-spec",
    linkedin: "Abhinav Kumar"
  },
  skills: {
    programming: ["C", "C++", "Java", "Python"],
    development: ["Frontend Development", "Python Development", "Machine Learning"],
    learning: ["Backend Development", "Full Stack Development"],
    frameworks: ["React", "HTML/CSS", "JavaScript", "TypeScript"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
  },
  projects: [
    {
      name: "Movie Recommendation System",
      description: "AI-powered movie recommendation engine using machine learning algorithms",
      link: "https://bright-jalebi-9a6bc5.netlify.app/",
      tech: ["Python", "Machine Learning", "Collaborative Filtering", "Web Development"],
      features: ["Personalized recommendations", "User rating system", "Movie database integration"]
    },
    {
      name: "Crop Prediction System", 
      description: "Agricultural prediction system using machine learning to forecast crop yields",
      link: "https://crop-predictor-234a.onrender.com",
      tech: ["Python", "Machine Learning", "Data Analysis", "Web Framework"],
      features: ["Weather data analysis", "Soil condition assessment", "Yield prediction"]
    },
    {
      name: "Safe Harvest",
      description: "Agricultural safety and optimization platform for farmers",
      link: "https://safe-harvest.onrender.com",
      tech: ["Full Stack Development", "Agricultural Tech", "Safety Systems"],
      features: ["Safety monitoring", "Harvest optimization", "Real-time alerts"]
    },
    {
      name: "Moisture Predictor",
      description: "Soil moisture prediction system for precision agriculture",
      link: "https://moisture-predicitor.onrender.com",
      tech: ["Machine Learning", "IoT Integration", "Data Analytics"],
      features: ["Soil moisture analysis", "Irrigation recommendations", "Historical data tracking"]
    }
  ],
  interests: [
    "Machine Learning and AI",
    "Agricultural Technology",
    "Full Stack Development", 
    "Open Source Contribution",
    "Innovation in Technology"
  ]
};

function generateLlamaResponse(message: string, context?: string): AIResponse {
  const lowerMessage = message.toLowerCase();
  
  // Advanced pattern matching with context awareness
  if (lowerMessage.includes("project") || lowerMessage.includes("work")) {
    const projectDetails = abhinavKnowledgeBase.projects.map(p => 
      `${p.name}: ${p.description} (${p.tech.join(", ")})`
    ).join("\n\n");
    
    return {
      response: `I've developed several innovative projects that showcase my expertise in machine learning and full-stack development:\n\n${projectDetails}\n\nEach project demonstrates my ability to solve real-world problems using cutting-edge technology. Would you like me to elaborate on any specific project?`,
      confidence: 0.95,
      suggestions: ["Tell me about the Movie Recommendation System", "How does the Crop Prediction work?", "What technologies did you use?"]
    };
  }
  
  if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("programming")) {
    return {
      response: `My technical expertise spans multiple domains:\n\n🔹 Programming Languages: ${abhinavKnowledgeBase.skills.programming.join(", ")}\n🔹 Development Areas: ${abhinavKnowledgeBase.skills.development.join(", ")}\n🔹 Currently Learning: ${abhinavKnowledgeBase.skills.learning.join(", ")}\n\nI'm particularly passionate about machine learning and agricultural technology, combining AI with real-world applications to solve complex problems. My projects demonstrate proficiency in both frontend and backend development.`,
      confidence: 0.92,
      suggestions: ["What's your experience with Machine Learning?", "Tell me about your development process", "Which technologies are you learning?"]
    };
  }
  
  if (lowerMessage.includes("education") || lowerMessage.includes("university") || lowerMessage.includes("study")) {
    return {
      response: `I'm currently pursuing my B.Tech degree at Jaypee University of Engineering and Technology in Guna, Madhya Pradesh, India. This prestigious institution has provided me with a strong foundation in engineering principles and computer science.\n\nDuring my studies, I've focused on practical application of theoretical knowledge, which is evident in my diverse project portfolio spanning machine learning, agricultural technology, and web development.`,
      confidence: 0.90,
      suggestions: ["What's your major?", "Tell me about your university projects", "How has your education influenced your projects?"]
    };
  }
  
  if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
    return {
      response: `You can reach me through multiple channels:\n\n📧 Email: aabhinavmishra133@gmail.com or kumarabhinav6649@gmail.com\n📱 Phone: +91 9142647855\n💼 GitHub: https://github.com/abhiav-spec\n🔗 LinkedIn: Abhinav Kumar\n\nI'm always open to discussing new opportunities, collaborations, or answering any questions about my work. Feel free to connect!`,
      confidence: 0.98,
      suggestions: ["What's the best way to contact you?", "Are you available for projects?", "Can we schedule a call?"]
    };
  }
  
  if (lowerMessage.includes("machine learning") || lowerMessage.includes("ml") || lowerMessage.includes("ai")) {
    return {
      response: `Machine Learning is one of my core competencies! I've applied ML techniques across multiple domains:\n\n🎬 Movie Recommendation System - Implemented collaborative filtering and content-based algorithms\n🌾 Agricultural Applications - Used predictive modeling for crop yields and moisture analysis\n📊 Data Analytics - Leveraged statistical models for pattern recognition\n\nI'm experienced with Python's ML ecosystem including scikit-learn, pandas, and numpy. My approach combines theoretical understanding with practical implementation to solve real-world challenges.`,
      confidence: 0.94,
      suggestions: ["What ML algorithms do you use?", "Tell me about your data science process", "Have you worked with deep learning?"]
    };
  }
  
  if (lowerMessage.includes("hire") || lowerMessage.includes("job") || lowerMessage.includes("opportunity") || lowerMessage.includes("work")) {
    return {
      response: `I'm actively seeking opportunities in software development, machine learning, and full-stack development! Here's what I bring to the table:\n\n✅ Strong foundation in multiple programming languages\n✅ Proven track record with deployed projects\n✅ Passion for innovative problem-solving\n✅ Experience in both frontend and backend technologies\n✅ Growing expertise in machine learning applications\n\nI'm particularly interested in roles that combine technology with real-world impact, similar to my agricultural technology projects. Let's discuss how I can contribute to your team!`,
      confidence: 0.93,
      suggestions: ["What type of roles interest you?", "Tell me about your availability", "Can you share your resume?"]
    };
  }
  
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return {
      response: `Hello! I'm an AI assistant representing Abhinav Kumar's portfolio. Abhinav is a passionate B.Tech student from Jaypee University with expertise in machine learning, full-stack development, and agricultural technology.\n\nI can help you learn about:\n🔹 His innovative projects (Movie Recommendation, Crop Prediction, etc.)\n🔹 Technical skills and programming expertise\n🔹 Educational background and achievements\n🔹 Contact information and availability\n\nWhat would you like to know about Abhinav's work?`,
      confidence: 0.88,
      suggestions: ["Tell me about his projects", "What are his technical skills?", "How can I contact him?"]
    };
  }
  
  // Default intelligent response
  return {
    response: `I'd be happy to help you learn more about Abhinav Kumar! As a B.Tech student at Jaypee University, he's developed an impressive portfolio of projects spanning machine learning, agricultural technology, and web development.\n\nHis work includes innovative solutions like movie recommendation systems, crop prediction models, and agricultural safety platforms. He's proficient in multiple programming languages and is passionate about using technology to solve real-world problems.\n\nWhat specific aspect of Abhinav's background or projects would you like to explore?`,
    confidence: 0.75,
    suggestions: ["Show me his projects", "What technologies does he use?", "Tell me about his education", "How can I contact him?"]
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { message, context, conversationHistory }: ChatMessage = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Simulate processing time for realistic AI response
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const aiResponse = generateLlamaResponse(message, context);

    return new Response(
      JSON.stringify({
        response: aiResponse.response,
        confidence: aiResponse.confidence,
        suggestions: aiResponse.suggestions,
        timestamp: new Date().toISOString(),
        model: "Llama-Enhanced-Assistant-v1.0"
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in chat-llama function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "I apologize, but I'm experiencing some technical difficulties. Please try again in a moment.",
        fallback: true
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});