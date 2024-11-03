import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {
  const { userMessage, history } = request.body;

  // Ограничение на количество сообщений учителя
  const teacherMessageLimit = 3;

  // Обрезаем историю до последних сообщений учителя
  const teacherMessages = (history || [])
    .filter((msg) => msg && msg.role === "teacher") // Check if msg is defined
    .slice(-teacherMessageLimit)
    .map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

  // Добавляем новое сообщение от пользователя
  const messages = [
    ...teacherMessages,
    { role: "user", content: userMessage },
  ];

  try {
    // Запрашиваем ответ от чат-бота
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    // Извлекаем контент ответа и отправляем его клиенту
    const botReply = result.data.choices[0].message.content;
    response.json({
      botReply,
      history: messages,
    });
  } catch (error) {
    console.error("An error occurred while fetching response from OpenAI API:", error);
    response.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
