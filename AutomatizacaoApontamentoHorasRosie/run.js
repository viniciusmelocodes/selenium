const { By, Key, Select, Builder, locateWith } = require("selenium-webdriver");

async function apontamentoHoras() {
    let dateToday = new Date();

    // Somente pode executar de segunda a sexta
    if (dateToday.getDay() > -1 && dateToday.getDay() < 6) {
        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("https://rosie.artit.com.br/auth/login");

        await driver.findElement(By.name("username")).sendKeys("seu usuario");
        await driver.findElement(By.name("password")).sendKeys("sua senha", Key.RETURN);

        await driver.findElement(By.id("tab_panel_apontamento")).click();

        // Apontamento de 09:00 às 12:00
        setTimeout(() => {
            let elFcToday = driver.findElement(By.css("td.fc-today"));
            elFcToday.findElement(By.className('btn-novo-apontamento')).click();

            setTimeout(() => {
                let selectElement = driver.findElement(By.id('cboCliente'));
                let select = new Select(selectElement);
                // Nome do cliente
                select.selectByVisibleText('3RA COMERCIO, CONSULTORIA E SERVICOS DE ');

                setTimeout(() => {
                    let selectElement = driver.findElement(By.id('cboProjeto'));
                    let select = new Select(selectElement);
                    // Nome do projeto
                    select.selectByVisibleText('ROSIE 2023');

                    setTimeout(() => {
                        let selectElement = driver.findElement(By.id('cboDemanda'));
                        let select = new Select(selectElement);
                        // Nome da demanda (EDT/WBS)
                        select.selectByVisibleText('CONTROLE GERAL');

                        setTimeout(() => {
                            let selectElement = driver.findElement(By.id('cboAtividade'));
                            let select = new Select(selectElement);
                            // Atividade
                            select.selectByVisibleText('CODIFICAÇÃO E TESTE UNITÁRIO');

                            setTimeout(() => {
                                driver.findElement(By.id("afu_horai")).sendKeys("09:00");
                                driver.findElement(By.id("afu_horaf")).sendKeys("12:00");
                                driver.findElement(By.id("afu_obs")).sendKeys("Atividades da manhã...");

                                driver.findElement(By.className("form-emotions")).click();

                                setTimeout(() => {
                                    driver.findElement(By.id("btn-save-apontamento")).click();
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 3000);

        // Apontamento de 13:00 às 18:00
        setTimeout(() => {
            let elFcToday = driver.findElement(By.css("td.fc-today"));
            elFcToday.findElement(By.className('btn-novo-apontamento')).click();

            setTimeout(() => {
                let selectElement = driver.findElement(By.id('cboCliente'));
                let select = new Select(selectElement);
                // Nome do cliente
                select.selectByVisibleText('3RA COMERCIO, CONSULTORIA E SERVICOS DE ');

                setTimeout(() => {
                    let selectElement = driver.findElement(By.id('cboProjeto'));
                    let select = new Select(selectElement);
                    // Nome do projeto
                    select.selectByVisibleText('ROSIE 2023');

                    setTimeout(() => {
                        let selectElement = driver.findElement(By.id('cboDemanda'));
                        let select = new Select(selectElement);
                        // Nome da demanda (EDT/WBS)
                        select.selectByVisibleText('CONTROLE GERAL');

                        setTimeout(() => {
                            let selectElement = driver.findElement(By.id('cboAtividade'));
                            let select = new Select(selectElement);
                            // Atividade
                            select.selectByVisibleText('CODIFICAÇÃO E TESTE UNITÁRIO');

                            setTimeout(() => {
                                driver.findElement(By.id("afu_horai")).sendKeys("13:00");
                                driver.findElement(By.id("afu_horaf")).sendKeys("18:00");
                                driver.findElement(By.id("afu_obs")).sendKeys("Atividades da tarde...");

                                driver.findElement(By.className("form-emotions")).click();

                                setTimeout(() => {
                                    driver.findElement(By.id("btn-save-apontamento")).click();
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 19000);

        setInterval(() => {
            driver.quit();
        }, 37000);
    } else {
        console.log('Apontamento de horas não permitido no dia de hoje.');
    }
};

apontamentoHoras();