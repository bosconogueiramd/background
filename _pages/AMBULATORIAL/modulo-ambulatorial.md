---
layout: page
title: Ambulatorial
permalink: /modulo-ambulatorial/
css:
  - /tremor_imagem/tremer.css
  - /assets/css/ambulatorial.css
---

<div class="ambulatorial">
    <!-- Conteúdo da seção -->
        <div class="conteudoambulatorial">
        <h1> PAINEL DE STICKERS </h1>
        <h2> Figurinhas autocolantes - <br>-  copie, cole e edite!</h2>  
        <p> Nessa página você encontra <strong>Stickers</strong>. São figurinhas com #Hashtags que guardam dentro de si um texto copiável. Você pode utilizar essa cópia de texto para ajustar-se à sua regulação ambulatorial, copiando sinais de alerta, esqueletos de respostas padrão, etc. [CLIQUE NA IMAGEM] </p>      
    </div>
</div>


<div class="regulaflix">
    <img id="imagem-clique" src="/assets/images/RegulaFlix.jpeg" alt="Imagem teste regulaflix">
</div>

## Painel de stickers:

<div class="painel-stickers">
    <div id="imagem-container">
        <img id="imagem-clique" src="/assets/images/lombalgia.png" alt="Descrição da Imagem" onclick="copiarTexto()" class="imagem-clicavel">
    </div>
            <table>
            <thead>
                <tr>
                    <th>Sticker</th>
                    <th>Filas relacionadas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Sinais de alerta</strong></td>
                    <td>
                        ORTOPEDIA GERAL - 
                        <font color="gray">ORTOPEDIA CIRURGIA DA COLUNA</font> - 
                        ORTOPEDIA PEDIATRIA - 
                        <font color="gray">RX DE COLUNA LOMBOSSACRA</font> - 
                        TC DE COLUNA LOMBOSSACRA - 
                        <font color="gray">RM DE COLUNA LOMBOSSACRA</font>
                    </td>
                </tr>
                <!-- Adicione mais linhas conforme necessário -->
            </tbody>
        </table>
    </div>
<script>
    function copiarTexto() {
        // Lógica para gerar o texto desejado
        var textoGerado = "São sinais de alerta para lombalgia: 1. Sintomas que iniciaram em paciente com idade maior que 70 anos ou menor que 20 anos; 2.Paciente com história prévia ou suspeita de câncer; 3. Paciente com imunossupressão (HIV, uso crônico de corticoides ou outros imunossupressores); 4. Presença de sinais ou sintomas sistêmicos (perda de peso de maneira involuntária, febre); 5.Dor com característica não mecânica (não relacionada à atividade/repouso) ou dor predominantemente noturna; 6. paciente com diagnóstico prévio de osteoporose; 7. Dor lombar com duração maior que 8 semanas, sem resposta ao tratamento clínico otimizado; 8. Outros sinais de alerta (descreva)."; 
        // Cria um elemento textarea temporário para copiar o texto
        var textareaTemp = document.createElement("textarea");
        textareaTemp.value = textoGerado;
        // Adiciona o elemento à página
        document.body.appendChild(textareaTemp);
        // Seleciona e copia o texto
        textareaTemp.select();
        document.execCommand("copy");
        // Remove o elemento temporário
        document.body.removeChild(textareaTemp);
        // Adiciona a classe de animação à imagem
        document.getElementById("imagem-clique").classList.add("animacao-tremer");
        // Define um tempo limite para remover a classe de animação
        setTimeout(function() {
            document.getElementById("imagem-clique").classList.remove("animacao-tremer");
        }, 1000); // Ajuste conforme necessário (1000ms = 1 segundo)
    }
</script>

   
   <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/tremor_imagem/tremer.css">

   <div class="manual-ortop">
        <div class="conteudo-manual-ortop">
        <h1>  INFORMAÇÕES MÉDICAS DE APOIO À REGULAÇÃO  </h1>
        <h2> -- Módulo Ortopedia -- </h2>  
        <p> Confira o Manual de Orientação em Ortopedia.</p>      
    </div>
</div>

   <iframe src="/_pages/AMBULATORIAL/manuais/MANUAL_ORTOPEDIA.pdf" width="100%" height="1500px" scrolling="auto"></iframe>


