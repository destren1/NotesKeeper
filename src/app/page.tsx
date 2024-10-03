'use client'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store';
import { BookOpen } from 'lucide-react';

export default function HomePage() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Добро пожаловать в NotesKeeper
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ваше персональное пространство для организации мыслей, идей и воспоминаний.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Почему выбрать NotesKeeper?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h3 className="font-medium text-gray-900 mb-2">✨ Простой и удобный</h3>
                  <p className="text-gray-600">Интуитивно понятный интерфейс для легкого управления заметками</p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-900 mb-2">🔒 Безопасный</h3>
                  <p className="text-gray-600">Ваши заметки остаются приватными и защищёнными</p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-900 mb-2">📱 Доступный</h3>
                  <p className="text-gray-600">Доступ к заметкам с любого устройства в любое время</p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-900 mb-2">🚀 Бесплатный</h3>
                  <p className="text-gray-600">Организуйте свои мысли без лишних затрат</p>
                </div>
              </div>
            </div>
          </div>

          {user ? (
            <Link 
              href="/profile" 
              className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Перейти к вашим заметкам
            </Link>
          ) : (
            <div className="space-x-4">
              <Link 
                href="/register" 
                className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Зарегистрироваться
              </Link>
            </div>
          )}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Зарегистрируйтесь</h3>
              <p className="text-gray-600">Создайте бесплатный аккаунт за несколько секунд</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Создавайте заметки</h3>
              <p className="text-gray-600">Добавляйте свои мысли и идеи</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Организуйте</h3>
              <p className="text-gray-600">Держите ваши заметки в порядке и всегда под рукой</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

