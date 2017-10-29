import * as qs from "querystring";

const baseURL: string =
  process.env.API_BASE_URL || "https://api.line.me/v2/bot/";

const apiURL = (path: string, query?: object) =>
  baseURL + path + (query ? `?${qs.stringify(query)}` : "");

export const reply: string = apiURL("message/reply");

export const push: string = apiURL("message/push");

export const multicast: string = apiURL("message/multicast");

export const content = (messageId: string) =>
  apiURL(`message/${messageId}/content`);

export const profile = (userId: string) => apiURL(`profile/${userId}`);

export const groupMemberProfile = (groupId: string, userId: string) =>
  apiURL(`group/${groupId}/member/${userId}`);

export const roomMemberProfile = (roomId: string, userId: string) =>
  apiURL(`room/${roomId}/member/${userId}`);

export const groupMemberIds = (groupId: string, start?: string) =>
  apiURL(`group/${groupId}/members/ids`, start ? { start } : null);

export const roomMemberIds = (roomId: string, start?: string) =>
  apiURL(`room/${roomId}/members/ids`, start ? { start } : null);

export const leaveGroup = (groupId: string) => apiURL(`group/${groupId}/leave`);

export const leaveRoom = (roomId: string) => apiURL(`room/${roomId}/leave`);

export const getRichMenu = (richMenuId: string) => apiURL(`richmenu/${richMenuId}`);

export const createRichMenu = () => apiURL(`richmenu`);

export const deleteRichMenu = (richMenuId: string) => apiURL(`richmenu/${richMenuId}`);

export const getRichMenuUser = (userId: string) => apiURL(`user/${userId}/richmenu`);

export const linkRichMenuUser = (userId: string, richMenuId: string) => apiURL(`user/${userId}/richmenu/${richMenuId}`);

export const unlinkRichMenuUser = (userId: string) => apiURL(`user/${userId}/richmenu`);

export const downloadRichMenuImage = (richMenuId: string) => apiURL(`richmenu/${richMenuId}/content`);

export const uploadRichMenuImage = (richMenuId: string) => apiURL(`richmenu/${richMenuId}/content`);

export const getRichMenuList = () => apiURL(`richmenu/list`);
