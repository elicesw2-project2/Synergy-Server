import express, { Router } from 'express';
import { chatroommemberController } from '../controllers/chatroommember.controller';

const chatroommemberRouter: Router = express.Router();

// 채팅방 멤버 목록 조회
chatroommemberRouter.get(
  '/:room_idx',
  chatroommemberController.getMemberByRoomId
);

// 채팅방 멤버 추가
chatroommemberRouter.post('/', chatroommemberController.addMember);

// 채팅방 나가기
chatroommemberRouter.delete('/', chatroommemberController.deleteMember);

export { chatroommemberRouter };