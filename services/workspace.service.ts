import * as Workspace from '../model/workspace.model';

// 모든 워크스페이스 목록 조회
export async function findAllWorkspaces(currentUserIdx: number) {
  const workspaces = await Workspace.findAll(currentUserIdx);
  console.log('service', workspaces);

  return workspaces;
}

// id로 워크스페이스 상세 조회
export async function findWorkspaceById(workspaceIdx: number) {
  const data = await Workspace.findById(Number(workspaceIdx));

  return data;
}

// 워크스페이스 등록
export async function createWorkspace(workspaceInfo: {
  name: string;
  profile: string;
}) {
  const newWorkspace = await Workspace.create(workspaceInfo);
  console.log('service', newWorkspace);

  return newWorkspace;
}

// 워크스페이스 수정
export async function updateWorkspace(
  workspaceIdx: number,
  workspaceInfo: {
    name: string;
    profile: string;
  }
) {
  console.log('service info', workspaceInfo);

  const updated = await Workspace.update(workspaceIdx, workspaceInfo);
  console.log('service', updated);

  return updated;
}

// 워크스페이스 삭제
export async function removeWorkspace(workspaceIdx: number) {
  await Workspace.remove(workspaceIdx);
}
