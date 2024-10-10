import { useState, FormEvent } from 'react';
import { createCompany } from '../api/axios';
import { useNavigate } from 'react-router-dom';

const AddCompanyForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [logo, setLogo] = useState<File | null>(null);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('website', website);
        if (logo) {
            formData.append('logo', logo);
        }

        try {
            await createCompany(formData);
            setStatusMessage('Company created successfully!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            setStatusMessage('Failed to create company.');
            console.error('Error creating company:', error);
        }
    };

    return (
        <div className="p-6 bg-white rounded shadow-md">
            {statusMessage && <p className="text-blue-600">{statusMessage}</p>}
            <h2 className="text-2xl font-bold mb-4">Add New Company</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Company Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Company Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Company Website</label>
                    <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Company Logo (Optional)</label>
                    <input
                        type="file"
                        onChange={(e) => setLogo(e.target.files ? e.target.files[0] : null)}
                        className="border rounded w-full p-2"
                    />
                </div>

                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCompanyForm;
