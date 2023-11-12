import React from 'react'
import './Faq.css'

export default function Faq() {
  return (
    <div className='container'>
        <h2 className='faq-title'>Ответы на вопросы</h2>
        <h4 className='faq-subtitle'>Как пользоваться приложением</h4>

    <div class="accordion accordion-flush " id="accordionFlushExample">
        <div class="accordion-item">
            <div className='accordion-active'>
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                1. Как использовать главное меню?   
                </button>
                </h2>
            </div>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Перейдите в главное меню приложения, где вы сможете увидеть категории товаров и их текущее количество в наличии.</div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
               2. Как получить доступ к дополнительной информации о товаре с использованием QR-кода?
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Наведите камеру вашего устройства на QR-код товара. Появится дополнительная информация, такая как текущее местоположение товара и его статус (на месте или в пути).
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            3. Как переместить товар в другое местоположение?
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Если товар находится на своем месте, при использовании QR-кода вы сможете выбрать опцию "Переместить" и указать новое местоположение для товара.</div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading4">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapseThree">
             4. Как принять товар, находящийся в пути?
            </button>
            </h2>
            <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Если товар находится в пути, наведите камеру на его QR-код и выберите опцию "Принять". Вы сможете обработать поступление товара и изменить его статус.</div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading5">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapseThree">
            5. Как удалить товар из инвентаря?
            </button>
            </h2>
            <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Для удаления товара, выберите соответствующий товар в главном меню или используйте QR-код, затем выберите опцию "Удалить".</div>
            </div>
        </div>
        </div>

        <div class='embed-container'><iframe src='https://www.youtube.com/embed//E3BBeUrJ5ao' frameborder='0' allowfullscreen></iframe></div>
    </div>
  )
}
