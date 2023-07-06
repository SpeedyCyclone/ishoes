const CronJob = require("cron").CronJob;
import { createClient } from "@supabase/supabase-js";
const dotenv = require("dotenv");
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const job = new CronJob(
  "0 0 * * *",
  () => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("Product").select("*");

        if (error) {
          console.error(error);
        } else {
          //console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },
  null,
  true,
  "UTC"
);

module.exports = job;
