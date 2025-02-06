# CursoEmVideo JS

Estou aprendendo a programar em Javascript e o que eu achar que devo anotar
colocarei dentro desse documento para melhor gravação dos estudos

Livros:

	1 - Javascript: O guia definitivo
	2 - Javascript: O guia do programador
	
	
Para guardar variáveis no javascript com as palavras
reservadas: var e let

nome da variável = identificador 
sinal de igual ---> atribuição

typeof ---> para saber qual é o tipo de dados das variáveis
que você define no javascript
	
	
Sinal de + ----> é usado para concatenar dois tipos 
diferentes de dados que você deseja apresentar

Number.parseInt ---> Converte String para numero inteiro
Number.parseInt ---> Converte String para um numero real

Conversão de Numero para String

1 - n.toString()
2 - String(n)


Template Strings ---> Usa crases para inserir
valores de variáveis sem utilizar a concatenação

${} -> Placeholder --> usado para lançar as variáveis
dentro da escrita de uma string

Metodos Extras para manipulação de strings

.length ---> te fala o tamanho da string
.toUpperCase ---> muda as letras minusculas para maiusculas
.toLowerCase ---> muda as letras maiusculas para minusculas

Formatando numeros

.toFixed(2) ---> Acrescenta casas decimais se você
quiser adicionar mais de uma

.replace('velho', 'novo') --> quando você quiser substituir
uma coisa por outra

.toLocaleString('pt-BR', (style: 'currency', currency: 'BRL'))


Operadores - Parte 01

aritméticos ---> +, -, *, /, %, **

Precedencia (Já sei mas deixarei anotado)
1 - ()
2 - **
3 - * ; / ; %; -> para esses que tem o mesmo nível
eu faço o que aparecer primeiro
4 - +; -; -> para esses que tem o mesmo nível
eu faço o que aparecer primeiro
 
incremento

n++   n -= 1
n--   n += 1


Operadores - Parte 02

Relacionais

>
<
>=
<=
== (iguais em grandeza, independente do tipo)
=== (são idênticos em tipo e grandeza)
!=
!==(desigual restrito)


Lógicos

! - negação (não)
&& - conjunção  (e)
|| - disjunção (ou)




Árvore DOM - Estrutura do Meu Site

		  window
		  /	| \
		 /	|  \
		/ 	|   \
	   /	|    \	
location document history
			|
		   html
		    /\
		   /  \
		  /    \
		 /      \
	  head	 	body
	   /\			\			
	  /  \			 \_ _ _	h1		
  meta	title   	  \_ _ _ p
					   \_ _ _ p	---> strong
						\_ _ _ div
						 	



Como acessar os elementos

por Marca --> getElementsByTagName()

por ID --> getElementById()

por Nome --> getElementsByName()

por Classe --> getElementByClassName()

Por Selector --> querySelector(), querySelectorAll()




Parte 2 - Eventos do DOM

O javascript pode interagir de diversas formas
ele pode controlar varios eventos do mouse

mouseenter
mousemove
mouseout
mousedow
mouseup
click


existem diversos outros eventos, não da pra decorar
apenas revise quando for necessário

digitando "event reference" 
