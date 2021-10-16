import api from './axios'

export default {

  getItems(){
    api.get('items')
  }

}