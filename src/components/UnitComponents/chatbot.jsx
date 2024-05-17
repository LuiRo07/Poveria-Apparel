import chatbotHelper from '../../assets/images/chatbot/assistantHelper.jpg';

function ChatBot() {
    return (
        <div className="inline-block sticky bottom-0 right-0 z-30">
            <div className="bg-slate-50/70 mb-2 mr-20 p-5 border-r-4">
                Hi! Welcome Back, How are you doing?
            </div>
            <img className='relative left-[250px] rounded-full size-20 ' src={chatbotHelper} alt="Assistant helper for site" />
        </div>
    )
}

export default ChatBot
