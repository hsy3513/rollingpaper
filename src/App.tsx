import { useState } from 'react';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import MessageForm from './components/MessageForm/MessageForm';
import MessageList from './components/MessageList/MessageList';
import type { Message } from './types/Message';
import './App.css';

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    author: '김민수',
    content:
      '항상 밝은 모습으로 주변을 환하게 만들어주셔서 감사해요! 앞으로도 건강하시고 행복하세요 😊',
    date: '2026-02-20',
  },
  {
    id: 2,
    author: '이지은',
    content:
      '함께 일하면서 많은 것을 배웠어요. 긍정적인 에너지가 정말 대단해요!',
    date: '2026-02-21',
  },
  {
    id: 3,
    author: '박지훈',
    content:
      '어려운 순간에도 포기하지 않는 모습이 정말 멋있어요. 응원합니다!',
    date: '2026-02-22',
  },
];

function App() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);

  const handleSubmit = (newMsg: Omit<Message, 'id' | 'date'>) => {
    const today = new Date().toISOString().slice(0, 10);
    const message: Message = {
      id: Date.now(),
      author: newMsg.author,
      content: newMsg.content,
      date: today,
    };
    setMessages((prev) => [message, ...prev]);
  };

  return (
    <div className="app" id="app-root">
      <main className="app__container">
        <ProfileHeader
          name="홍길동"
          description="안녕하세요! 여러분의 따뜻한 메시지를 기다리고 있습니다. 함께했던 소중한 순간들, 응원의 말 한마디, 무엇이든 좋으니 편하게 남겨주세요. 여러분의 메시지 하나하나가 큰 힘이 됩니다! 💖"
        />
        <MessageForm onSubmit={handleSubmit} />
        <MessageList messages={messages} />
      </main>
    </div>
  );
}

export default App;
