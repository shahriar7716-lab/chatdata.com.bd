// Get the form and input elements
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Function to handle user question and get the response
function getAnswer(question) {
  const answers = {
    "তোমার নাম": "আমার নাম GreenBot!",
    "কি খবর": "সব ভালো, আপনি কী খবর?",
    "বাংলাদেশের রাজধানী কোথায়": "বাংলাদেশের রাজধানী ঢাকা।",
    "বাংলাদেশের প্রধানমন্ত্রী কে": "বাংলাদেশের প্রধানমন্ত্রী শেখ হাসিনা।",
    "তুমি কে": "আমি একটি কৃত্রিম বুদ্ধিমত্তা।",
    "গান গাও": "আমি গান গাইতে পারি না, কিন্তু আপনি গান শুনতে পারেন!",
    "কিভাবে সাহায্য করতে পারি": "আমি আপনাকে তথ্য প্রদান করতে পারি বা যেকোনো প্রশ্নের উত্তর দিতে পারি।",
    "আজকের তারিখ কি": "আজকের তারিখ হচ্ছে " + new Date().toLocaleDateString(),
    "বিশ্বের সবচেয়ে বড় দেশ কোনটি": "বিশ্বের সবচেয়ে বড় দেশ হচ্ছে রাশিয়া।",
    "মহাকাশে প্রথম মানুষ কে যান": "মহাকাশে প্রথম মানুষ ইউরি গ্যাগারিন।",
    "আপনি কেমন আছেন": "আমি ভালো আছি, ধন্যবাদ!",
    
    // Example of adding more information
    "বিশ্বের সবচেয়ে ছোট দেশ কোনটি": "বিশ্বের সবচেয়ে ছোট দেশ হচ্ছে ভ্যাটিকান সিটি।",
    "বিশ্বের সবচেয়ে উচ্চতম পর্বত কোনটি": "বিশ্বের সবচেয়ে উচ্চতম পর্বত হচ্ছে মাউন্ট এভারেস্ট।",
    "বাংলাদেশের প্রথম প্রেসিডেন্ট কে": "বাংলাদেশের প্রথম প্রেসিডেন্ট ছিল সৈয়দ নজরুল ইসলাম।",
    "মহান মুক্তিযুদ্ধের তারিখ কবে শুরু হয়": "মহান মুক্তিযুদ্ধ ১৯৭১ সালের ২৬ মার্চ শুরু হয়।",
    "বাংলাদেশের জাতীয় ফুল কোনটি": "বাংলাদেশের জাতীয় ফুল হচ্ছে শাপলা।",
    
    // Keep adding more as needed
    "তাজমহল কোথায় অবস্থিত": "তাজমহল ভারতের উত্তর প্রদেশ রাজ্যের আগরা শহরে অবস্থিত।",
    "বিশ্বের সবচেয়ে দীর্ঘ নদী কোনটি": "বিশ্বের সবচেয়ে দীর্ঘ নদী হচ্ছে নীল নদী।",
    "পৃথিবীর সবচেয়ে গরম স্থান কোনটি": "পৃথিবীর সবচেয়ে গরম স্থান হচ্ছে দানি ট্রিল, ইরান।",
    "বিশ্বের সবচেয়ে ঠান্ডা স্থান কোথায়": "বিশ্বের সবচেয়ে ঠান্ডা স্থান হচ্ছে ভ্লাদিভোস্টক, রাশিয়া।",
    "মহান মুক্তিযুদ্ধের ৭ই মার্চের ভাষণ কোথায় দেয়া হয়েছিল": "৭ই মার্চের ভাষণটি রেসকোর্স ময়দানে দেয়া হয়েছিল।",
    "বিশ্বের সবচেয়ে পুরনো বিশ্ববিদ্যালয় কোথায়": "বিশ্বের সবচেয়ে পুরনো বিশ্ববিদ্যালয় হচ্ছে আল-আজহার বিশ্ববিদ্যালয়, মিশর।",
    "বাংলাদেশের জাতীয় খেলা কোনটি": "বাংলাদেশের জাতীয় খেলা হচ্ছে কাবাডি।",
    "বাংলাদেশে প্রথম গণতান্ত্রিক নির্বাচন কবে হয়": "বাংলাদেশে প্রথম গণতান্ত্রিক নির্বাচন ১৯৭৩ সালে হয়েছিল।",
    "তিনটি প্রধান জলবায়ু অঞ্চল কি কি": "তিনটি প্রধান জলবায়ু অঞ্চল হচ্ছে তাপমাত্রা, আর্দ্রতা এবং মরূদ্বীপ।",
  };

  // Normalize question to lowercase for easier matching
  question = question.toLowerCase();

  // Iterate over answers to find matches
  for (let key in answers) {
    if (question.includes(key.toLowerCase())) {
      return answers[key];
    }
  }

  // Fallback response if no match is found
  return "দুঃখিত, আমি এই প্রশ্নের উত্তর জানি না।";
}

// Handle form submission
chatForm.addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent form from refreshing the page
  const userQuestion = userInput.value.trim();

  // Check if the input is not empty
  if (userQuestion) {
    // Display the user's question
    chatBox.innerHTML += `<div class="user-message">${userQuestion}</div>`;
    // Show typing loader
    chatBox.innerHTML += '<div class="bot-typing">📝 GreenBot typing...</div>';

    // Get the response from the bot after a small delay (simulate typing)
    setTimeout(() => {
      const answer = getAnswer(userQuestion);
      chatBox.innerHTML += `<div class="bot-message">${answer}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
      userInput.value = ''; // Clear input field
    }, 1500); // Simulate typing delay (1.5 seconds)
  }
});
