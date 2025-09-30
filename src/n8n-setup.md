# Configuração do N8N para Chat Widget

## Estrutura do Workflow

O n8n precisa ter um workflow com os seguintes nós:

### 1. Webhook Node
- **Path**: `landing-page-automacao`
- **Method**: `POST`
- **Response Mode**: `Response to Webhook`

### 2. HTTP Response Node
- **Headers necessários para CORS**:
  ```
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: POST, OPTIONS
  Access-Control-Allow-Headers: Content-Type
  ```

### 3. Nó de Processamento (IA/GPT) - ADICIONAR
Entre o webhook e a resposta, você precisa adicionar um nó para processar a mensagem:

#### Opção 1: OpenAI Node
- Use o texto da mensagem como prompt
- Configure para responder como assistente da CT Junior
- Retorne o texto da resposta

#### Opção 2: HTTP Request para outra IA
- Configure um request para GPT/Claude/etc
- Processe a resposta

### 4. Set Node (Opcional)
Para formatar a resposta:
```json
{
  "response": "{{ $node['OpenAI'].json.choices[0].message.content }}",
  "status": "success"
}
```

## Payload Enviado pelo Chat
```json
{
  "message": "Mensagem do usuário",
  "sessionId": "session_1234567890_abc123",
  "timestamp": "2025-09-30T02:15:38.173Z"
}
```

## Resposta Esperada pelo Chat
```json
{
  "response": "Resposta do bot/IA",
  "status": "success"
}
```

## URL Correta
O chat está configurado para usar:
`https://n8n.ctjunior.com.br/webhook/landing-page-automacao`

## Teste do Webhook
Você pode testar o webhook com curl:
```bash
curl -X POST https://n8n.ctjunior.com.br/webhook/landing-page-automacao \
  -H "Content-Type: application/json" \
  -d '{"message":"Teste","sessionId":"test123","timestamp":"2025-09-30T02:15:38.173Z"}'
```

## Fallback
Se o n8n não responder, o chat usa respostas pré-programadas baseadas em palavras-chave da mensagem.