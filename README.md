<p align=center> <img src="https://github.com/debtavares/NotTested-API/blob/main/img/4249806.jpg?raw=true" alt="bunny"/>

# Not Tested 

> Banco de dados de marcas nacionais que não realizam testes em animais. 


## Apresentação
<p>Projeto de conclusão do bootcamp Back-end da {reprograma} em parceria com a Accenture. O "Not Tested" é uma API com banco de dados que tem por objetivo reunir as marcas nacionais que são cruelty free: que não realizam testes em animais e nem compram ingredientes de fornecedores que utilizam esse tipo de procedimento. 

Em muitas indústrias - como farmaceuticas e cosméticas - testar em animais é muito comum, pois visam identificar possíveis reações adversas das substâncias ou comprovar sua eficácia. Porém, há os maus tratos e sacrifício dos animais durante o processo, e com o avanço da tecnologia isso não é mais necessário porque ja é possível realizar testes in vitro ou através do desenvolvimento de pele artificial que são tão ou mais eficazes quanto os testes em animais.
  
A luta contra o uso de animais na produção de cosméticos começou há muito tempo e atualmente tem ganhado força ao redor do mundo. A União Europeia proibiu essa prática em 2009 e em 2013 impediu a importação de produtos e matéria prima que utilizam testes animais em sua cadeia produtiva. Em contrapartida, em países como a China a prática ainda é exigida por lei para permitir a comercialização ao consumidor final.
  
O mais importante de tudo isso é a conscientização das pessoas. Ao comprar produtos livres de crueldade, já está colaborando com as organizações que defendem essa e outras causas relacionadas ao direito dos animais.

</p>

Aplicação [aqui](https://on12-projeto-final.herokuapp.com/).

## Funcionalidades

- [x] Campos do Schema: id (autogerado), marca, empresa, tipo, vegana;
- [x] Lista de todas as marcas cruelty free;
- [x] Cadastro de novas marcas;
- [x] Atualização do cadastro de alguma marca;
- [x] Remoção do cadastro de alguma marca;
- [x] Criação de usuário e login para a usuária com acesso sem restrição.

## Tecnologias e dependências

- Node.js
- MongoDB
- Git
- Heroku
- express
- nodemon
- dotenv
- mongoose
- bcrypt
- jsonwebtoken

## Rotas

- #### Marcas
| Método |  Rota  |  Feature  |
| ------------------- | ------------------- |------------------- |
|  GET |  /brands | Lista todas as marcas |
|  GET |  /brands/:id | Acessar marca por id |
|  POST |  /brands  | Cadastrar marca |
|  PATCH |  /brands /:id | Modificar cadastro por id  |
|  DELETE |  /brands /:id | Deletar cadastro por id |


- #### Usuária
| Método |  Rota  |  Feature |
| ------------------- | ------------------- |------------------- |
|  POST |  /create | Criar usuária |
|  POST |  /login | Login de usuária |

#

<p align=center> 
Com amor, Débora.<br><br>
<img src="https://cdn-icons-png.flaticon.com/512/4775/4775505.png" alt="bunny-icon" width="70rem"/> </p>