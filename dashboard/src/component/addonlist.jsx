import React from "react";
import styles from "../style/addonlist.module.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
//   boxShadow: 24,
  p: 4,
};

function Addonlist() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.maindiv}>
      <div className={styles.items}>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Sitout</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Formal Living Area</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Kids Bedrooms</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Dining Room</p>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Courtyard</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Game Room</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Theatre Room</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>varanda</p>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Library</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Laundry Room</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Conservatory</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Study Room</p>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Deck</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Servant Room</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Stair</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Elevator</p>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Swimming Pool</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Landscaping</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Basement</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Garage</p>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>WaterBody</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Porch</p>
        </div>
        <div className={styles.inputdiv}>
          <input
            className={styles.radiomain}
            type="checkbox"
            id="html"
            name="radio1"
            value="radio1"
          />
          <p className={styles.labelservice}>Patio</p>
        </div>

        {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}

        <div className={styles.inputsuggesions}>
          <p className={styles.labelsuggestion} onClick={handleOpen}>
            Add suggestions
          </p>
          <Modal
            open={open}
            onClose={handleClose}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
              style={{
                border: "none",
                borderRadius: "4px",
              }}
            >
              <div className={styles.popup}>
                <div className={styles.crossalign}>
                  <p className={styles.labeladdmore}>Add more</p>
                  <img
                    src="assets/Vector (15).svg"
                    width="10px"
                    height="10px"
                    onClick={handleClose}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#F1F1F1",
                    height: "6rem",
                    outline: "none",
                    borderRadius: "4px",
                  }}
                  contentEditable
                >
                  <p className={styles.labeldesc}> Enter your requirements</p>
                </div>
                <div className={styles.buttonalignment}>
                  <button className={styles.savebutton} onClick={handleClose}>
                    Save
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>

      <div className={styles.tabledatalast}>
        <div>
          <button type="button" className={styles.skipbutton}>
            Skip
          </button>
        </div>
        <div>
          <button type="button" className={styles.nextbutton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addonlist;
