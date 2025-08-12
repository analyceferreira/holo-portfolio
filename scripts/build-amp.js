import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🚀 Iniciando build AMP...");

try {
  // Executar o build AMP
  console.log("📦 Executando vite build --config vite.config.amp.js...");
  execSync("npm run build:amp", { stdio: "inherit" });

  // Copiar o arquivo amp.html para dist
  const sourcePath = path.join(__dirname, "..", "amp.html");
  const destPath = path.join(__dirname, "..", "dist", "amp.html");

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log("✅ Arquivo amp.html copiado para dist/");

    // Verificar se foi copiado
    if (fs.existsSync(destPath)) {
      const stats = fs.statSync(destPath);
      console.log(
        `📁 Tamanho do arquivo AMP: ${(stats.size / 1024).toFixed(2)} KB`
      );
    }
  } else {
    console.error("❌ Arquivo amp.html não encontrado na raiz do projeto");
    process.exit(1);
  }

  console.log("🎉 Build AMP concluído com sucesso!");
} catch (error) {
  console.error("❌ Erro durante o build AMP:", error.message);
  process.exit(1);
}
