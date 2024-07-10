import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner'



const Phones = () => {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone').then((res) => res.json()).then((data) => setPhones(data.data))

        //dont need to convert it in json() form
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone').then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            }
            )
            setPhones(phonesWithFakeData)
            console.log(phonesWithFakeData)
            setLoading(false)
        })
    }, [])
    return (
        <div>
            <h2 className="text-3xl">Phones:{phones.length}</h2>
            {loading && <Audio
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />

            }

            <BarChart width={1200} height={200} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'price'}></YAxis>
                <Tooltip></Tooltip>
            </BarChart>

        </div>
    );
};

export default Phones;