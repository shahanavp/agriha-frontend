import styles from "../style/pendingtransaction.module.css";
function Pendingtransaction() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.tableheader}>
        <div className={styles.labeltableheader}>

          <p>Date</p>
          <p>Payment code</p>
          <p>Description</p>
          <p>Stage</p>
          <p>Amount</p>
          <p>Action</p>
        </div>
        
      </div>

      <div className={styles.dot}>
      <img src="assets/Ellipse 28.svg" heigth="5px" width="5px" />
      <div className={styles.tabledata}>
      
        <p>25/04/2030</p>
        <p>0254LBV56</p>
        <p>Lorem Ipsum has been</p>
        <p>02</p>
        <p>500000</p>
        <button type="button" className={styles.paynowbutton}>Pay now</button>
      </div>
      </div>

      <div className={styles.dot}>
      <img src="assets/Ellipse 28.svg" heigth="5px" width="5px" />
      <div className={styles.tabledata}>

        <p>25/04/2030</p>
        <p>02HDLBV52</p>
        <p>Add on service</p>
        <p>Add on</p>
        <p>500000</p>
        <button type="button" className={styles.paynowbutton}>Pay now</button>
      </div>
      </div>

    </div>
  );
}
export default Pendingtransaction;
