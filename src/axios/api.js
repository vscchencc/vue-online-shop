import { fetch, post, patch, put } from './http-server'

/** 
* 测试接口
* 名称：exam
* 参数：paramObj/null
* 方式：fetch/post/patch/put
*/
export const server = {
  exam: function(paramObj){
      return fetch('/api/data',paramObj);
  }
}