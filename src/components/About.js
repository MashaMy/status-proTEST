import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Picabout from '../Asserts/Picabout.jpg'
import abNatal from '../Asserts/abNatal.jpg'
import nadya from '../Asserts/nadya.jpg'
import sveta from '../Asserts/sveta.jpg'



export const About = () => (
    <>
  <div class ="text-light">
 <div class="pt-4 text-center ">
     <div class=" py-0 ">
      <h1 class="text-emphasis ">Нам можно доверять: </h1>
      <p class="col-lg-10 mx-auto lead ">
        Архитектурно-дизайнерское бюро "STATUS" на рынке с 2010 года. На проятжении 
        многих лет реализует различные проекты, выполняет качественно работу, создает весь  
        проектный дизайнерский цикл, что позволяет долгосрочно дружить с заказчиками. 
        У нас лучшая команда классных специлаистов с многолетним опытом работы 
        в индустрии дизайн от разработки коммуникативного дизайна до дизайн проектирования 
        совершенно любых объектов: жилых, коммерческих и муниципальных.</p>
    </div>
  </div>
  
  <div class=" my-0 ">
  <div class="p-3 text-center rounded-3">
    <h1 class="text-emphasis">Дизайнеры нашей компании</h1>
    <p class="lead">
      постоянно совершенствуются, что позволяет предлагать заказчикам новейшие идеи для реализации. И самое главное реализовывать 
      поставленные цели. Эффективно и детально прорабатывать все проектные дизайн решения, что значительно уменьшает 
      сроки строительных работ, так и общую стоимость. 
    </p>
  </div>

  <div>
<img src= { Picabout } class="rounded mx-auto d-block img-fluid" alt="Picabout" width={800} height={500}/>
</div>
</div>
</div>


<section class='about my-3' id='about'>
  <h3 class="text-center py-3"> Наша команда</h3>
<div class='container'>
<div class='row'>
   <div class='col-lg-6 order-1 order-lg-2'>
     <img class='img-fluid rounded-3' src= { abNatal } alt='Ekaterina'/>
   </div>
   <div class='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 content'>
<h3>Екатерина Великая</h3>
<p class="font-italic">
Опыт работы: с 2007 года
</p>
<p class="font-italic">
Председатель Союза Дизайнеров России в г. Сочи с 2022 г.
</p>
<p class="font-italic">
Арт-директор журнала Art Gallary с 2023 г.
</p>
<p class="font-italic">
Член Союза Архитекторов России с 2013 г.
</p>
<p class="font-italic">
Член Союза Дизайнеров России в г.Сочи с 2010 г.
</p>

<ul>
<li>Развитие и реализация программ поддрежки креативных индустрий на территории Сочи</li>
<li>Полный цикл дизайна  от проектирования до реализации</li>
<li>Экспертное мнение по диайнерскому проекту</li>
</ul>
<p>«Дизайнер понимает, что достиг совершенства не тогда, когда ему нечего добавить, а тогда, когда нечего убрать». Антуан де Сент-Экзюпери</p>

<div class='text-center'>
<a  href="https://wa.me/79184055993" target="_blank "><button type="button" class="btn btn-outline-light ">Написать Екатерине</button></a>
</div>
   </div>
</div>
</div>
</section>

<section class='about my-5' id='about'>
 <div class='container'>
<div class='row'>
   <div class='col-lg-6 order-1 order-lg-2'>
     <img class='img-fluid rounded-3' src= { nadya } alt='Ekaterina'/>
   </div>
   <div class='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 content'>
<h3>Надежда Коваленко</h3>
<p class="font-italic">
Опыт работы: с 2019 года
</p>
<p class="font-italic">
Член Союза Дизайнеров России в г. Сочи с 2022 г.
</p>
<p class="font-italic">
Участник выставки  DESIGN PRO 2022 "Жилые пространства" 
</p>
<p class="font-italic">
Участник выставки ФОКУС "Строительство Архитектура  Дизайн 2022"
</p>
<p class="font-italic">
Авторские публикации в журнале ART GALLERY с 2023
</p>
<ul>
  <li>Васту эксперт. Создаю пространство с правильными энергиями, которое будет работать на Вас.</li>
<li>Предпочитаю смешение стилей: к примеру, в лаконичность и сдержанность добавляю немного шарма и эпатажности. Атмосфера будет выразительнее и сохранится утонченность!</li>
</ul>
<p>Наш дом оказывает большое влияние на нашу судьбу, успех, карьеру, здоровье, бизнес и семейные отношения! </p>

<div class='text-center'>
<a href="https://wa.me/79631612833" target="_blank "><button type="button" class="btn btn-outline-light "> Написать Надежде</button></a>
</div>
   </div>
</div>
</div>
</section>

<section class='about my-5' id='about'>
 <div class='container'>
<div class='row'>
   <div class='col-lg-6 order-1 order-lg-2'>
     <img class='img-fluid rounded-3' src= { sveta } alt='Ekaterina'/>
   </div>
   <div class='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 content'>
<h3>Светлана Томилина</h3>
<p class="font-italic">
Опыт работы: с 2019 года
</p>
<p class="font-italic">
Статус: действующий дизайнер, член Союза Дизайнеров России.
</p>
<ul>
  <li>Знание стилей и трендов</li>
<li>Технические навыки: чертежи и планы </li>
<li>Обучение и саморазвитие</li>
</ul>
<p >В своих проектах стремлюсь раскрыть потенциал и функциональность каждого помещения. 
  Мой подход основан на открытом диалоге и внимании к деталям. 
  Я с удовольствием помогу создать пространство, в котором будет комфортно и приятно.  </p>

<div class='text-center'>
<a href="https://wa.me/79183004489" target="_blank "><button type="button" class="btn btn-outline-light ">Написать Светлане</button></a>
</div>
   </div>
</div>
</div>
</section>


 
  </>

)