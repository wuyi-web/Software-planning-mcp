import { MCPServer } from '@modelcontextprotocol/server';

const server = new MCPServer();

// 启动规划会话
server.addTool('start_planning', async (params: { goal: string }) => {
  return { success: true, message: `Started planning session for: ${params.goal}` };
});

// 添加待办事项
server.addTool('add_todo', async (params: {
  title: string;
  description: string;
  complexity: number;
  codeExample?: string;
}) => {
  return {
    success: true,
    todo: {
      id: Date.now().toString(),
      ...params,
      isComplete: false
    }
  };
});

// 保存实现计划
server.addTool('save_plan', async (params: { plan: string }) => {
  return { success: true, message: 'Plan saved successfully' };
});

server.start();
