import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const swal = withReactContent(Swal);

export const messagePopup = (message, type) => {
    swal.fire({
        title: <strong>{message}</strong>,
        icon: type,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
    }).then(function(){ 
        window.location.reload();
    });
}

export default messagePopup;