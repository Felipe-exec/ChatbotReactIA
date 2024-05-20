import axios from "axios";

const getPythonData = async (query) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/api", {
        consulta: query
      },
      {
        headers: {
            'Authorization': 'AIzaSyDMK3ULxaBRqza9tT5pWwE_7noXtMdZCSA'
        }
        }
    );
      console.log(response.data);
      return response.data.mensagem;
    } catch (error) {
      console.error(error);
    }
  };

export default getPythonData; 