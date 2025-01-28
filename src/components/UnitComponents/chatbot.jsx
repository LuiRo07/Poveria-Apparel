import chatbotHelper from "/assets/images/chatbot/assistantHelper.jpg";

function ChatBot() {
  return (
    <div className="hidden sm:inline-block">
      <p className="bg-slate-50/70 mb-2 mr-20 p-5 border-r-4">
        Hi! Welcome, How can I help you today?
      </p>
      <img
        className="relative rounded-full size-20 "
        src={chatbotHelper}
        alt="Assistant helper for site"
      />
    </div>
  );
}

export default ChatBot;
