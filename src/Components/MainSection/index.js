function MainSection(){
    return (
        <div className="mainSection">
            <div className="dialogueSection">
                <ul className="dialogue-info">
                    <li className="dialogue-user dialogue">
                        <div className="dialogue-sub-section">
                            <div className="account">
                            User  
                        </div>
                        <p>Bạn là 1 trợ lý AI thông minh có nhiệm vụ giúp tôi trả lời các câu hỏi về lập trình, các thư viện front-end như react hay angular, ngôn ngữ như Javascript, HTML, CSS,..</p>
                        </div>
                    </li>
                    <li className="dialogue-ai dialogue">
                        <div className="dialogue-sub-section">
                            <div className="account">
                            ChatGPTT
                        </div>
                        <p>Chào bạn! Tôi sẽ cố gắng trợ giúp bạn trả lời các câu hỏi về lập trình, các thư viện front-end như React hay Angular, và các ngôn ngữ như JavaScript, HTML, CSS, v.v. Hãy cho tôi biết bạn cần trợ giúp về gì nào?</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="inputSection">
                <div className="status"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg> Regenerate response</div>
                <div className="input">
                    <textarea type="text" className="prompt" />
                    <div className="stoke">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection;