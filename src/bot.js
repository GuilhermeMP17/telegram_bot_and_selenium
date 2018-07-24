const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('618131689:AAHZfHfbFHCNIMawY0Au5CZfDPTOf1tL720')
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    oiCommand($) {
        $.sendMessage('Olá,Tudo bem? você já conhece o Guilherme M. Pereira?')
    }
    belezaCommand($) {
        $.sendPhoto({ path: '454.jpg'})
    }
    criadorCommand($) {
        $.sendMessage('Ele é meu criador, e para isso criou uma API em NodeJs, para que eu pudesse responder vocês aqui no telegram.')
    }
    liderCommand($) {
        (async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 3000));
                var service = new chrome.ServiceBuilder(path).build();
                chrome.setDefaultService(service);       
                await new Promise(resolve => setTimeout(resolve, 3000));
                const builder = await new webdriver.Builder();
                const options = new chrome.Options();
                const driver = builder
                    .forBrowser('chrome')
                    .setChromeOptions(options)
                    .build();
                await driver.get('https://globoesporte.globo.com/futebol/brasileirao-serie-a/');
                const lider = await driver.findElement(webdriver.By.className('tabela-times-time-nome')).getText();
                $.sendMessage('O Atual Líder do Brasileirão Série A é o:  ' + lider + '  [para acessar a tabela completa acesse o link https://globoesporte.globo.com/futebol/brasileirao-serie-a/]')
                await driver.quit();
            }
            catch (error) {
                console.error(error);
            }
        })();
    }

    startCommand($) {
        (async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 3000));
                var service = new chrome.ServiceBuilder(path).build();
                chrome.setDefaultService(service);       
                await new Promise(resolve => setTimeout(resolve, 3000));
                const builder = await new webdriver.Builder();
                const options = new chrome.Options();
                const driver = builder
                    .forBrowser('chrome')
                    .setChromeOptions(options)
                    .build();
                await driver.get('https://www.folha.uol.com.br/');
                const manchete = await driver.findElement(webdriver.By.className('c-main-headline__title')).getText();
                const teste = await driver.findElements(webdriver.By.className('c-main-headline__title'));
                $.sendMessage('A notícia mais importante do dia no jornal Folha de São Paulo:  ' + manchete + '  [para ler a notícia completa acesse o link https://www.folha.uol.com.br/]')
                await driver.quit();
            }
            catch (error) {
                console.error(error);
            }
        })();
    }
    nomeCommand($) {
        $.sendMessage('Meu nome é BotNode, eu nasci em  28/06/2018, eu fui escrito na linguagem NodeJs, e estou pronto pra te responder algumas perguntas.')
    }
    legalCommand($) {
        $.sendMessage('Muito, ele é um ótimo desenvolvedor e com seu conhecimento em nodeJS, me ajudou a te responder algumas perguntas...')
    }
    inteligenteCommand($) {
        $.sendMessage('Na verdade ele me ensinou a responder apenas algumas perguntas por enquanto, você pode perguntar meu nome, perguntar como fui criado ou sobre o meu criador.')
    }

    get routes() {
        return {
            'liderCommand':'liderCommand',
            'oiCommand': 'oiCommand',
            'criadorCommand': 'criadorCommand',
            'nomeCommand':'nomeCommand',
            'startCommand':'startCommand',
            'belezaCommand': 'belezaCommand',
            'legalCommand':'legalCommand',
            'inteligenteCommand':'inteligenteCommand'
        }
    }
}

tg.router
    .when(
        new TextCommand('Oi','oiCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Brasileirão','liderCommand'),
        new PingController()
    )
    .when(
        new TextCommand('brasileirão','liderCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Olá', 'oiCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Opah', 'oiCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Beleza', 'belezaCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Jóia', 'belezaCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Não', 'criadorCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Sim', 'criadorCommand'),
        new PingController()
    )
    .when(
        new TextCommand('nome?', 'nomeCommand'),
        new PingController()
    )
    .when(
        new TextCommand('legal', 'legalCommand'),
        new PingController()
    )
    .when(
        new TextCommand('inteligente', 'inteligenteCommand'),
        new PingController()
    )
    .when(
        new TextCommand('/start', 'startCommand'),
        new PingController()
    )
    .when(
        new TextCommand('news', 'startCommand'),
        new PingController()
    )
    .when(
        new TextCommand('noticias', 'startCommand'),
        new PingController()
    )
    .when(
        new TextCommand('manchete', 'startCommand'),
        new PingController()
    )