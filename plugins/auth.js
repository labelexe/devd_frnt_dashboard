//"user=%7B%22id%22%3A1248134771%2C%22first_name%22%3A%22Al%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22lblweb%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=2825407828922979414&chat_type=sender&auth_date=1703759914&hash=3e4b8ef2312aa3cf49feb105e0b2ba9719bb77b0517715d507dcdfd2235deb41"


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0OTY5NzMxLCJpYXQiOjE3MDM3NjAxMzEsImp0aSI6ImRkZjQ4YWY3MzViNjQ5ZGViYmRmYjIxYjk0ZWM1NmE5IiwidXNlcl9pZCI6Mn0.D7m1fa0OvfvCx-t_m1FgCh4vvKJ7wCOLy7fJhCN1Fm8


export default function ({$axios, error: nuxtError}) {
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0OTY5NzMxLCJpYXQiOjE3MDM3NjAxMzEsImp0aSI6ImRkZjQ4YWY3MzViNjQ5ZGViYmRmYjIxYjk0ZWM1NmE5IiwidXNlcl9pZCI6Mn0.D7m1fa0OvfvCx-t_m1FgCh4vvKJ7wCOLy7fJhCN1Fm8"
  $axios.setToken(token)
}
