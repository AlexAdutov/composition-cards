// Импорт React и ReactNode из библиотеки react
import React, { ReactNode }from 'react'

// Определение интерфейса ICardprops для пропсов компонента Card
interface ICardprops {
    title: string, // Заголовок карточки
    text: string, // Текст карточки
    children?: ReactNode, // Дочерние элементы, необязательные
}

// Экспорт компонента Card
export const Card: React.FC<ICardprops> = ({title, text, children}) => {
  return (
    // Отображение карточки
    <div className="card box" style={{ width: '18rem', marginTop: '2rem' }}>
        {children} {/* Вставка дочерних элементов */}
        <div className="card-body">
            <h5 className="card-title">{title}</h5> {/* Отображение заголовка */}
            <p className="card-text">{text}</p> {/* Отображение текста */}
            <a href="#" className="btn btn-primary">Go somewhere</a> {/* Кнопка */}
        </div>
    </div>
  )
}
