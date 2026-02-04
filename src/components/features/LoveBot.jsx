import React, { useState, useRef, useEffect } from 'react';

const qa = {
    "default": "I love hearing from you! Ask me something else ❤️",
    "why": "Because you are the kindest, most beautiful soul I know. You make me better.",
    "memory": "I have so many, but our trips together always stand out. And just holding you.",
    "love": "I love you more than yesterday, but less than tomorrow.",
    "hello": "Hai vave! ❤️"
};

const LoveBot = () => {
    const [messages, setMessages] = useState([
        { text: "Hai vave! I'm your digital Vishnu. Ask me why I love you! ❤️", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const endRef = useRef(null);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
        setInput('');

        // Process response
        setTimeout(() => {
            let botResponse = qa.default;
            const lower = userMsg.toLowerCase();

            if (lower.includes('why') && lower.includes('love')) botResponse = qa.why;
            else if (lower.includes('memory') || lower.includes('remember')) botResponse = qa.memory;
            else if (lower.includes('love you')) botResponse = qa.love;
            else if (lower.includes('hello') || lower.includes('hi')) botResponse = qa.hello;

            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-soft)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '400px'
        }}>
            <div style={{
                backgroundColor: 'var(--color-blush)',
                padding: 'var(--spacing-md)',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'var(--color-text-dark)'
            }}>
                Chat with Virtual Vishnu 💬
            </div>

            <div style={{
                flex: 1,
                padding: 'var(--spacing-md)',
                overflowY: 'auto',
                backgroundColor: '#fafafa'
            }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{
                        textAlign: msg.sender === 'user' ? 'right' : 'left',
                        marginBottom: '8px'
                    }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 12px',
                            borderRadius: '16px',
                            backgroundColor: msg.sender === 'user' ? 'var(--color-gold)' : 'var(--color-soft-pink)',
                            color: msg.sender === 'user' ? 'white' : 'var(--color-text-dark)',
                            borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                            borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                            maxWidth: '80%'
                        }}>
                            {msg.text}
                        </span>
                    </div>
                ))}
                <div ref={endRef}></div>
            </div>

            <div style={{
                padding: 'var(--spacing-sm)',
                borderTop: '1px solid #eee',
                display: 'flex'
            }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message..."
                    style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '20px',
                        border: '1px solid #ddd',
                        marginRight: '8px',
                        outline: 'none'
                    }}
                />
                <button
                    onClick={handleSend}
                    style={{
                        backgroundColor: 'var(--color-blush)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    ➤
                </button>
            </div>
        </div>
    );
};

export default LoveBot;
