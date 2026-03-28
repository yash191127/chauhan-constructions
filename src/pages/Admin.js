import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function Admin() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setLeads(data);
    };

    fetchLeads();
  }, []);

  return (
    <div style={{ padding: "80px 20px", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>

      <div style={{ maxWidth: "800px", margin: "40px auto" }}>
        {leads.map((lead) => (
          <div
            key={lead.id}
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          >
            <h3>{lead.name}</h3>
            <p>📞 {lead.phone}</p>
            <p>📍 {lead.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;