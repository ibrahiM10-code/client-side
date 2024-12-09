import React, { useState, useEffect, useContext } from "react";
import { apiProcessUrl } from "../helpers/apiUrl";
import CircularProgress from "@mui/material/CircularProgress";
import NavBar from "../components/NavBar";
import AuthContext from "../context/AuthProvider";
import EPContainer from "../components/EPContainer";
import DetailsCard from "../components/DetailsCard";
import DeleteButton from "../components/DeleteButton";
import Sidebar from "../components/Sidebar";
import DeleteModal from "../components//DeleteModal";
import axios from "axios";

function PaymentMethodsPage() {
  const { config } = useContext(AuthContext);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bringPaymentMethods = async () => {
      try {
        const response = await axios.get(
          `${apiProcessUrl}/payment-methods`,
          config
        );
        setPaymentMethods(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    bringPaymentMethods();
  }, [paymentMethods, config]);

  return (
    <>
      <NavBar />
      <Sidebar />
      <EPContainer
        title={"my payment methods"}
        btnText={"add a new payment method"}
      >
        {loading ? (
          <CircularProgress />
        ) : paymentMethods.length === 0 ? (
          <h1>No payment methods added</h1>
        ) : (
          paymentMethods.map((pm, index) => (
            <DetailsCard
              key={index}
              paymentMethodName={pm.method}
              totalSpent={32000}
            >
              <DeleteButton
                key={index}
                payment_method_id={pm.id_user_payment_method}
              />
            </DetailsCard>
          ))
        )}
      </EPContainer>
      <DeleteModal />
    </>
  );
}

export default PaymentMethodsPage;
