---
layout: page
title: APAC
permalink: /modulo-apac/
---

<!-- Adiciona a referência ao seu arquivo CSS -->
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/calculadora/calculadora.css">

<div class="calc-quimio" style="text-align: center;">
<br>
<br>


   <h2> 💊  Calculadora de Quimioterapia  💊 </h2>
    <p>Digite <strong>mês e ano</strong> de início do tratamento.<br>
    Exemplo: Data de início: 03/11/2022 [Digite: 11/2022].</p>
    <label for="dataInicio"></label>
    <input type="text" id="dataInicio" placeholder="MM/AAAA"  maxlength="7">
    <button id="calcularBtn">Calcular</button>
    <p id="resultado"></p>
</div>
<br>
<br>
<br>
<br>
<br>

<form id="dateForm">
   <h2> 🩸 Calculadora de Hemodiálise 🩸</h2>
    <label for="startDate">Data de Início:</label>
    <input type="text" id="startDate" placeholder="DD/MM/AAAA" />
    <button type="submit">Verificar</button>
</form>

<div id="result"></div>

<p id="horaAtual"></p>
<p id="horasFaltantes"></p>

<script src="{{ site.baseurl }}/calculadora/calculadora.js"></script>

<p style="margin-bottom: 30px;"></p>

<p> 📍 O que mais você gostaria de encontrar aqui? <strong> <br>contato@regulamed.com.br</strong>.</p>
