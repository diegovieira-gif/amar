const { NodeSSH } = require('node-ssh');
const dotenv = require('dotenv');
const path = require('path');

// Carrega as variáveis de ambiente do .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

/*
=========================================================
INSTRUÇÕES:
Atualize o seu arquivo .env.local com as seguintes chaves:

SSH_HOST=192.168.0.115
SSH_USER=root
SSH_PASS=SuaSenhaSegura123
=========================================================
*/

const ssh = new NodeSSH();

// Configurações do Servidor
const SSH_HOST = process.env.SSH_HOST;
const SSH_USER = process.env.SSH_USER;
const SSH_PASS = process.env.SSH_PASS;
const REMOTE_DIR = '/opt/amar/';

// Configurações de cores para o terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function logInfo(msg) {
  console.log(`${colors.cyan}[INFO]${colors.reset} ${msg}`);
}

function logSuccess(msg) {
  console.log(`${colors.green}[SUCESSO]${colors.reset} ${msg}`);
}

function logError(msg) {
  console.error(`${colors.red}[ERRO]${colors.reset} ${msg}`);
}

function logWarning(msg) {
  console.log(`${colors.yellow}[AVISO]${colors.reset} ${msg}`);
}

function logCommandOutput(stdout, stderr) {
  if (stdout) console.log(`${colors.blue}${stdout}${colors.reset}`);
  if (stderr) console.error(`${colors.yellow}${stderr}${colors.reset}`);
}

async function runDeploy() {
  if (!SSH_HOST || !SSH_USER || !SSH_PASS) {
    logError('As credenciais SSH não foram encontradas no .env.local. Verifique as configurações.');
    process.exit(1);
  }

  try {
    logInfo(`Iniciando conexão com ${SSH_USER}@${SSH_HOST}...`);
    
    await ssh.connect({
      host: SSH_HOST,
      username: SSH_USER,
      password: SSH_PASS,
      // Se usar chave privada, descomente e preencha o caminho:
      // privateKeyPath: '/caminho/para/chave/id_rsa'
    });

    logSuccess('Conectado ao servidor remoto com sucesso!');

    logInfo(`Navegando para o diretório do projeto: ${REMOTE_DIR}`);

    // Executa os comandos em cadeia no diretório remoto
    const commands = [
      'git pull origin main',
      'chmod +x deploy.sh',
      './deploy.sh'
    ];

    for (const cmd of commands) {
      logInfo(`Executando: ${cmd}`);
      
      const result = await ssh.execCommand(cmd, { cwd: REMOTE_DIR });
      
      logCommandOutput(result.stdout, result.stderr);

      if (result.code !== 0) {
        logError(`O comando "${cmd}" falhou com código de saída ${result.code}.`);
        logInfo('Abortando deploy...');
        ssh.dispose();
        process.exit(1);
      }
    }

    logSuccess('Deploy concluído com sucesso!');
    
  } catch (error) {
    logError(`Erro durante o deploy: ${error.message}`);
    process.exit(1);
  } finally {
    logInfo('Encerrando conexão SSH...');
    ssh.dispose();
  }
}

runDeploy();
