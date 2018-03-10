const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
// const today = year + '-' + month + '-' + day
// const todays = year + '/' + month + '/' + day
const BASEURL = 'http://v3.wufazhuce.com:8000/api/hp/bymonth/';
export const READURL = 'http://v3.wufazhuce.com:8000/api/channel/reading/more/0';
export const READDETAIL = 'http://v3.wufazhuce.com:8000/api/essay/';
export const ESSAYLIST = 'http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/'
// ?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios
export const OPTIONS = {
  'channel':'wdj',
  'version':'4.0.2',
  'uuid':'ffffffff-a90e-706a-63f7-ccf973aae5ee',
  'platform':'ios'
}
export const HOMEURL = BASEURL + year + '-' + month + '-' + day + '%2000:00:00'