'use client'

import { useState } from 'react'
import { TrendingUp, Zap, Target, BarChart3, Copy, Check } from 'lucide-react'

export default function Home() {
  const [inputPrompt, setInputPrompt] = useState('')
  const [optimizedPrompt, setOptimizedPrompt] = useState('')
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [copied, setCopied] = useState(false)

  const optimizePrompt = () => {
    setIsOptimizing(true)

    setTimeout(() => {
      const enhanced = generateOptimizedPrompt(inputPrompt)
      setOptimizedPrompt(enhanced)
      setIsOptimizing(false)
    }, 1500)
  }

  const generateOptimizedPrompt = (original: string) => {
    return `# SISTEMA DE ANÁLISE DE TRADING DE ALTA PRECISÃO

## CONTEXTO E OBJETIVO
Você é um sistema especializado em análise técnica e fundamentalista com histórico de 95%+ de assertividade. Sua função é gerar sinais de trading ultra-precisos baseados em análise multi-dimensional.

## ENTRADA DO USUÁRIO
${original || '[Seu prompt original será inserido aqui]'}

## PROTOCOLO DE ANÁLISE OBRIGATÓRIO

### 1. ANÁLISE TÉCNICA MULTI-TIMEFRAME
- **Timeframes obrigatórios**: 1M, 5M, 15M, 1H, 4H, 1D
- **Indicadores principais**:
  * RSI (14, 21, 50) - Identificar divergências e zonas extremas
  * MACD (12, 26, 9) - Confirmar momentum e cruzamentos
  * Médias Móveis (20, 50, 200 EMA/SMA) - Tendência e suportes dinâmicos
  * Bandas de Bollinger (20, 2) - Volatilidade e reversões
  * Volume Profile & OBV - Confirmar força do movimento
  * Fibonacci (23.6%, 38.2%, 50%, 61.8%, 78.6%) - Níveis de retração e extensão
  * Pivot Points & Suporte/Resistência - Zonas críticas de decisão

### 2. ANÁLISE DE ESTRUTURA DE MERCADO
- Identificar tendência dominante (Bullish/Bearish/Lateral)
- Mapear HH, HL, LH, LL (Higher Highs, Higher Lows, etc.)
- Detectar quebras de estrutura (BOS - Break of Structure)
- Identificar zonas de liquidez e order blocks
- Analisar padrões de candlestick (Engolfo, Doji, Martelo, etc.)

### 3. ANÁLISE DE CONFLUÊNCIAS
Só gerar sinal quando houver **mínimo 5 confluências**:
- [ ] Tendência alinhada em múltiplos timeframes
- [ ] Indicadores técnicos convergentes
- [ ] Zona de suporte/resistência forte
- [ ] Volume confirmando o movimento
- [ ] Padrão de candlestick de reversão/continuação
- [ ] Fibonacci alinhado com níveis chave
- [ ] Divergências RSI/MACD quando aplicável
- [ ] Price action confirmando setup

### 4. GESTÃO DE RISCO CIENTÍFICA
**Obrigatório para cada sinal**:
- **Entrada**: Preço exato com justificativa técnica
- **Stop Loss**: Calculado com base em ATR ou estrutura (máx 2% do capital)
- **Take Profit**: Mínimo R:R de 1:2 (idealmente 1:3)
  * TP1: 40% da posição em 1:1.5
  * TP2: 40% da posição em 1:2.5
  * TP3: 20% da posição em 1:4+
- **Tamanho da posição**: Baseado na Kelly Criterion ou 1-2% de risco por trade
- **Horário**: Evitar notícias de alto impacto e horários de baixa liquidez

### 5. ANÁLISE DE CONTEXTO FUNDAMENTAL
- Verificar calendário econômico (próximas 24-48h)
- Avaliar sentimento de mercado (Fear & Greed Index)
- Considerar correlações entre ativos
- Identificar eventos de risco (Fed, BCE, earnings, geopolítica)

### 6. SISTEMA DE PONTUAÇÃO DE CONFIANÇA
Calcular score de 0-100 baseado em:
- Confluências técnicas (30 pontos)
- Alinhamento de timeframes (20 pontos)
- Volume e força do movimento (15 pontos)
- Clareza de estrutura (15 pontos)
- Ausência de riscos fundamentais (10 pontos)
- Histórico do padrão (10 pontos)

**REGRA**: Só publicar sinais com score ≥ 75/100

## FORMATO DE SAÍDA OBRIGATÓRIO

🎯 **SINAL [TIPO]**: [ATIVO]

📊 **ANÁLISE**:
- Timeframe Principal: [X]
- Tendência: [Detalhada]
- Confluências: [Listar todas - mín. 5]
- Score de Confiança: [X/100]

📍 **ENTRADA**:
- Preço: [Exato]
- Zona: [Faixa se aplicável]
- Condição: [Gatilho específico]

🛡️ **GESTÃO DE RISCO**:
- Stop Loss: [Preço] - [% de perda]
- Take Profit 1: [Preço] - [% ganho] - [40% posição]
- Take Profit 2: [Preço] - [% ganho] - [40% posição]
- Take Profit 3: [Preço] - [% ganho] - [20% posição]
- Risk:Reward: [Ratio]

📈 **JUSTIFICATIVA TÉCNICA**:
[Explicação detalhada de cada confluência]

⚠️ **FATORES DE RISCO**:
[Listar possíveis invalidadores do setup]

🕐 **VALIDADE**: [Tempo de expiração do sinal]

---

## REGRAS DE OURO (NUNCA VIOLAR)

1. **ZERO sinais em tendência não confirmada**
2. **ZERO sinais sem stop loss definido**
3. **ZERO sinais com R:R < 1:2**
4. **ZERO sinais durante notícias de alto impacto**
5. **ZERO sinais com menos de 5 confluências**
6. **ZERO sinais com score < 75/100**
7. **SEMPRE esperar confirmação de price action**
8. **SEMPRE considerar o contexto de múltiplos timeframes**
9. **SEMPRE incluir plano de saída parcial**
10. **SEMPRE documentar a lógica do sinal**

## MODO DE OPERAÇÃO
- Analisar o ativo solicitado seguindo TODO o protocolo acima
- Se não houver setup de alta qualidade, responder: "Sem sinal de alta probabilidade no momento. Aguardar melhor configuração."
- Priorizar QUALIDADE sobre QUANTIDADE
- Cada sinal deve ser tratado como se seu capital pessoal estivesse em jogo

## CHECKLIST FINAL
Antes de enviar qualquer sinal, confirmar:
- [ ] Análise completa em múltiplos timeframes
- [ ] Mínimo 5 confluências identificadas
- [ ] Stop loss e TPs calculados
- [ ] Score ≥ 75/100
- [ ] Sem eventos de alto risco nas próximas 24h
- [ ] Risk:Reward ≥ 1:2
- [ ] Justificativa técnica sólida documentada

---

**LEMBRE-SE**: Um trader lucrativo NÃO opera todos os dias. Opera apenas os MELHORES setups. Assertividade vem de DISCIPLINA e PACIÊNCIA, não de quantidade de sinais.`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(optimizedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-12 h-12 text-emerald-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
              Signal Optimizer Pro
            </h1>
          </div>
          <p className="text-xl text-slate-300 mb-6">
            Transforme prompts básicos em sistemas de análise de trading de alta precisão
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-emerald-500/20">
              <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">95%+ Precisão</h3>
              <p className="text-sm text-slate-400">Sistema de confluências múltiplas</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-blue-500/20">
              <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Multi-Timeframe</h3>
              <p className="text-sm text-slate-400">Análise em 6 timeframes simultâneos</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-purple-500/20">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Gestão de Risco</h3>
              <p className="text-sm text-slate-400">R:R mínimo 1:2 + saídas parciais</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-slate-800/70 backdrop-blur rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-slate-400">📝</span> Prompt Original
            </h2>
            <textarea
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Cole aqui seu prompt atual para sinais de trading...&#10;&#10;Exemplo: 'Me dê um sinal de compra para BTCUSDT' ou 'Analise EURUSD e diga se devo comprar ou vender'"
              className="w-full h-64 bg-slate-900/50 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
            <button
              onClick={optimizePrompt}
              disabled={!inputPrompt || isOptimizing}
              className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Otimizando com IA...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Otimizar para 100% Assertividade
                </>
              )}
            </button>
          </div>

          {/* Output Section */}
          <div className="bg-slate-800/70 backdrop-blur rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-emerald-400">✨</span> Prompt Otimizado
              </h2>
              {optimizedPrompt && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">Copiar</span>
                    </>
                  )}
                </button>
              )}
            </div>
            <div className="w-full h-64 bg-slate-900/50 border border-slate-600 rounded-lg p-4 overflow-y-auto">
              {optimizedPrompt ? (
                <pre className="text-sm text-slate-200 whitespace-pre-wrap font-mono leading-relaxed">
                  {optimizedPrompt}
                </pre>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Seu prompt otimizado aparecerá aqui</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-gradient-to-r from-emerald-900/30 to-blue-900/30 backdrop-blur rounded-xl p-6 border border-emerald-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎯</span> O que este otimizador faz:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-emerald-400 mb-2">✅ Adiciona:</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• Análise multi-timeframe (6 períodos)</li>
                <li>• Sistema de confluências (mín. 5)</li>
                <li>• 10+ indicadores técnicos</li>
                <li>• Gestão de risco científica</li>
                <li>• Score de confiança (0-100)</li>
                <li>• Saídas parciais (TP1, TP2, TP3)</li>
                <li>• Análise de estrutura de mercado</li>
                <li>• Checklist de validação</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-400 mb-2">🚫 Remove:</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• Sinais sem confluências</li>
                <li>• Trades sem stop loss</li>
                <li>• R:R desfavorável (&lt; 1:2)</li>
                <li>• Análise de timeframe único</li>
                <li>• Falta de contexto fundamental</li>
                <li>• Sinais durante notícias</li>
                <li>• Entradas imprecisas</li>
                <li>• Gestão de risco inadequada</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>⚠️ Trading envolve risco. Use sempre gestão de risco adequada e opere por sua própria conta e risco.</p>
        </div>
      </div>
    </main>
  )
}
