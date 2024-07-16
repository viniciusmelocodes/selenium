const { By, Key, Select, Builder } = require("selenium-webdriver");

async function apontamentoHoras() {
  let dateToday = new Date();

  // Somente pode executar de segunda a sexta
  if (dateToday.getDay() > 0 && dateToday.getDay() < 6) {
    let diaSemana = "";
    let data = {
      usuario: "vinicius.simplicio",
      senha: "",
      cliente: "3RA COMERCIO, CONSULTORIA E SERVICOS DE ",
      projeto: "ROSIE 2023",
      demanda: "CONTROLE GERAL",
      atividade: "CODIFICAÇÃO E TESTE UNITÁRIO",
      horarioInicialManha: "",
      horarioFinalManha: "",
      observacaoManha: "Suporte técnico de equipe do Rosie atual",
      horarioInicialTarde: "",
      horarioFinalTarde: "",
      observacaoTarde:
        "Suporte técnico de equipe do novo Rosie. Desenvolvimento de telas e rotinas do novo Rosie.",
    };

    process.argv.forEach(function (val, index, array) {
      if (index == 2) {
        diaSemana = val;
      }
    });

    switch (diaSemana) {
      case "segunda":
        data.horarioInicialManha = "09:03";
        data.horarioFinalManha = "13:04";
        data.horarioInicialTarde = "14:02";
        data.horarioFinalTarde = "18:01";
        break;
      case "terca":
        data.horarioInicialManha = "09:01";
        data.horarioFinalManha = "13:00";
        data.horarioInicialTarde = "14:06";
        data.horarioFinalTarde = "18:07";
        break;
      case "quarta":
        data.horarioInicialManha = "09:08";
        data.horarioFinalManha = "13:09";
        data.horarioInicialTarde = "14:07";
        data.horarioFinalTarde = "18:06";
        break;
      case "quinta":
        data.horarioInicialManha = "09:04";
        data.horarioFinalManha = "13:06";
        data.horarioInicialTarde = "14:09";
        data.horarioFinalTarde = "18:07";
        break;
      case "sexta":
        data.horarioInicialManha = "09:11";
        data.horarioFinalManha = "13:11";
        data.horarioInicialTarde = "14:01";
        data.horarioFinalTarde = "18:01";
        break;

      default:
    }

    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://rosie.artit.com.br/auth/login");
    await driver.findElement(By.name("username")).sendKeys(data.usuario);
    await driver
      .findElement(By.name("password"))
      .sendKeys(data.senha, Key.RETURN);
    await driver.findElement(By.id("tab_panel_apontamento")).click();
    // Apontamento da manha
    setTimeout(() => {
      let elFcToday = driver.findElement(By.css("td.fc-today"));
      elFcToday.findElement(By.className("btn-novo-apontamento")).click();
      setTimeout(() => {
        let selectElement = driver.findElement(By.id("cboCliente"));
        let select = new Select(selectElement);
        // Nome do cliente
        select.selectByVisibleText(data.cliente);
        setTimeout(() => {
          let selectElement = driver.findElement(By.id("cboProjeto"));
          let select = new Select(selectElement);
          // Nome do projeto
          select.selectByVisibleText(data.projeto);
          setTimeout(() => {
            let selectElement = driver.findElement(By.id("cboDemanda"));
            let select = new Select(selectElement);
            // Nome da demanda (EDT/WBS)
            select.selectByVisibleText(data.demanda);
            setTimeout(() => {
              let selectElement = driver.findElement(By.id("cboAtividade"));
              let select = new Select(selectElement);
              // Atividade
              select.selectByVisibleText(data.atividade);
              setTimeout(() => {
                driver
                  .findElement(By.id("afu_horai"))
                  .sendKeys(data.horarioInicialManha);
                driver
                  .findElement(By.id("afu_horaf"))
                  .sendKeys(data.horarioFinalManha);
                driver
                  .findElement(By.id("afu_obs"))
                  .sendKeys(data.observacaoManha);
                let emotion = driver.findElement(By.className("form-emotions"));
                emotion.findElement(By.id("emotion-good")).click();
                setTimeout(() => {
                  driver.findElement(By.id("btn-save-apontamento")).click();
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 3000);
    // Apontamento da tarde
    setTimeout(() => {
      let elFcToday = driver.findElement(By.css("td.fc-today"));
      elFcToday.findElement(By.className("btn-novo-apontamento")).click();
      setTimeout(() => {
        let selectElement = driver.findElement(By.id("cboCliente"));
        let select = new Select(selectElement);
        // Nome do cliente
        select.selectByVisibleText(data.cliente);
        setTimeout(() => {
          let selectElement = driver.findElement(By.id("cboProjeto"));
          let select = new Select(selectElement);
          // Nome do projeto
          select.selectByVisibleText(data.projeto);
          setTimeout(() => {
            let selectElement = driver.findElement(By.id("cboDemanda"));
            let select = new Select(selectElement);
            // Nome da demanda (EDT/WBS)
            select.selectByVisibleText(data.demanda);
            setTimeout(() => {
              let selectElement = driver.findElement(By.id("cboAtividade"));
              let select = new Select(selectElement);
              // Atividade
              select.selectByVisibleText(data.atividade);
              setTimeout(() => {
                driver
                  .findElement(By.id("afu_horai"))
                  .sendKeys(data.horarioInicialTarde);
                driver
                  .findElement(By.id("afu_horaf"))
                  .sendKeys(data.horarioFinalTarde);
                driver
                  .findElement(By.id("afu_obs"))
                  .sendKeys(data.observacaoTarde);
                let emotion = driver.findElement(By.className("form-emotions"));
                emotion.findElement(By.id("emotion-good")).click();
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
    console.log("Apontamento de horas não permitido no dia de hoje.");
  }
}

apontamentoHoras();
