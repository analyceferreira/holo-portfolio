#!/usr/bin/env node

/**
 * AMP Validation Script
 * Valida se o arquivo AMP está correto
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cores para output no terminal
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

console.log(
  `${colors.bright}${colors.blue}🔍 Validando arquivo AMP...${colors.reset}\n`
);

// Verificar se o arquivo AMP existe
const ampFile = path.join(__dirname, "amp.html");
if (!fs.existsSync(ampFile)) {
  console.error(
    `${colors.red}❌ Arquivo amp.html não encontrado!${colors.reset}`
  );
  process.exit(1);
}

// Ler o arquivo AMP
const ampContent = fs.readFileSync(ampFile, "utf8");

// Validações básicas
const validations = [
  {
    name: "DOCTYPE HTML",
    test: /<!DOCTYPE html>/i,
    required: true,
  },
  {
    name: "Tag AMP",
    test: /<html ⚡/,
    required: true,
  },
  {
    name: "Script AMP Runtime",
    test: /<script async src="https:\/\/cdn\.ampproject\.org\/v0\.js"><\/script>/,
    required: true,
  },
  {
    name: "AMP Boilerplate CSS",
    test: /<style amp-boilerplate>/,
    required: true,
  },
  {
    name: "AMP Custom CSS",
    test: /<style amp-custom>/,
    required: true,
  },
  {
    name: "Google Analytics AMP",
    test: /<amp-analytics type="gtag"/,
    required: true,
  },
  {
    name: "Sidebar AMP",
    test: /<amp-sidebar/,
    required: true,
  },
  {
    name: "Form AMP",
    test: /<form[^>]*action-xhr/,
    required: true,
  },
];

let passed = 0;
let failed = 0;

console.log(`${colors.bright}Executando validações:${colors.reset}\n`);

validations.forEach((validation) => {
  const result = validation.test.test(ampContent);

  if (result) {
    console.log(`${colors.green}✅ ${validation.name}${colors.reset}`);
    passed++;
  } else {
    if (validation.required) {
      console.log(
        `${colors.red}❌ ${validation.name} (REQUERIDO)${colors.reset}`
      );
      failed++;
    } else {
      console.log(
        `${colors.yellow}⚠️  ${validation.name} (OPCIONAL)${colors.reset}`
      );
    }
  }
});

console.log(`\n${colors.bright}📊 Resultado da Validação:${colors.reset}`);
console.log(`${colors.green}✅ Passou: ${passed}${colors.reset}`);
console.log(`${colors.red}❌ Falhou: ${failed}${colors.reset}`);

if (failed > 0) {
  console.log(
    `\n${colors.red}❌ Validação falhou! Corrija os erros acima.${colors.reset}`
  );
  process.exit(1);
} else {
  console.log(
    `\n${colors.green}🎉 Validação AMP passou com sucesso!${colors.reset}`
  );
  console.log(`\n${colors.cyan}💡 Próximos passos:${colors.reset}`);
  console.log(`1. Teste no AMP Validator: https://validator.ampproject.org/`);
  console.log(`2. Verifique no Google Search Console`);
  console.log(`3. Teste a performance com Lighthouse`);
}

// Verificar tamanho do arquivo
const fileSize = fs.statSync(ampFile).size;
const fileSizeKB = (fileSize / 1024).toFixed(2);

console.log(
  `\n${colors.cyan}📁 Tamanho do arquivo AMP: ${fileSizeKB} KB${colors.reset}`
);

if (fileSize > 800 * 1024) {
  // 800KB
  console.log(
    `${colors.yellow}⚠️  Arquivo muito grande! Considere otimizar.${colors.reset}`
  );
} else {
  console.log(`${colors.green}✅ Tamanho do arquivo está bom!${colors.reset}`);
}
