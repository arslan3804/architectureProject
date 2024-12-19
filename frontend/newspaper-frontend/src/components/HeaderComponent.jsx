import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <a className='navbar-brand' href="/">Каталог газет</a>
                <a className='navbar-brand' href="/register">Регистрация</a>
                <a className='navbar-brand' href="/login">Вход</a>
                <a className='navbar-brand' href="/subscriptions">История подписок</a>

            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent