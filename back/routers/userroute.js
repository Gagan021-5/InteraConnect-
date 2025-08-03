import { Router } from "express";
const internroute = Router();
import { dummy } from "../utils/dummydata.js";

internroute.get("/dashboard", async (req, res) => {
  try {
    const result = dummy.map((val) => {
      return {
        name: val.name,
        referalcode: val.referralCode,
        totalDonation: val.totalDonations,
        rewards: val.rewards.map((i) => {
          return {
            reward: i.reward,
            criteria: i.criteria,
          };
        }),
      };

    });
    res.json(result);
    console.log(result);
    
  } catch (err) {
    res.status(505).json({ msg: "There is somerror!" });
  }
});

export default internroute;
