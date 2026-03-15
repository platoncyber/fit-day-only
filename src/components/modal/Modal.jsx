import './Modal.css'
import { Check } from 'lucide-react'
import Link from 'next/link'

const Model = (props) => {

    const myidbotlink = 'https://t.me/myidbot'
    const fitdayidbot  = 'https://t.me/fit_day_only_bot'
    const {fn} = props



    return(
        <div className="model">
            <Check/>
            <h4>У вас почти всё готово</h4>
            <p>Шаг №1: <Link href={myidbotlink} target='_blank'><span className='active_link'>Получить ID вашего аккаунта</span></Link></p>
            <p>Шаг №2: <Link href={fitdayidbot} ><span className='active_link'>Открой ссылку и отправь</span>боту команду: /start</Link></p>
            <button onClick={(e) =>{
                e.preventDefault();
                fn(false)
            }}>понятно</button>

        </div>
    )
}

export default Model;