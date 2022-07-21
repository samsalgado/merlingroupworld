import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChildModal from './childModal';
import btcqr from './BTC-Code.jpeg';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} >Donate NOW</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2>Donate</h2>
            <img src={btcqr} className='btc-code' alt="code"/>
          </Typography>
          <Typography>
             Bitcoin Address: 3D7YEdY4ph2FSRwAeB1MxHw7hwjRZb32q2

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            <ChildModal />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
