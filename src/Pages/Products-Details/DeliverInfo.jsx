

const DeliverInfo = () => {
    return (
        <div>
            <div className="flex justify-between gap-10 p-10">
                <div className="w-[50%]">
                    <h3 className="text-2xl">
                        আপনি ঢাকা মেট্রোপলিটন সিটির ভীতরে হলেঃ-
                    </h3>
                    <ol>
                        <li>1. ক্যাশ অন ডেলিভারি/ হোম ডেলিভারি।</li>
                        <li>2. ডেলিভারি চা্জ ৬০ টাকা।</li>
                        <li>3. পণ্যের টাকা ডেলিভারি ম্যানের কাছে প্রদান করবেন।</li>
                        <li>4. অর্ডার কনফার্ম করার ৪৮ ঘণ্টার ভিতর ডেলিভারি পাবেন।</li>
                    </ol>
                </div>
                <div className="w-[50%]">
                    <h3 className="text-2xl">আপনি ঢাকা সিটির বাহীরে হলেঃ-</h3>
                    <ol>
                        <li>1. কন্ডিশন বুকিং অন কুরিয়ার সার্ভিস এ নিতে হবে।</li>
                        <li>2. কুরিয়ার সার্ভিস চা্জ ১২০ টাকা বিকাশ/ নাগাদ/ রকেট এ অগ্রিম প্রদান করতে হবে।</li>
                        <li>3. কুরিয়ার চার্জ ১২০ টাকা আপ্রদান করার ৪৮ ঘন্টা পর কুরিয়ার হতে পণ্য গ্রহন করতে হবে এবং পণ্যের টাকা কুরিয়ার অফিসে প্রদান করতে হবে।</li>
                    </ol>
                </div>
            </div>
            <div>
                <p className="text-2xl font-semibold">
                    বিঃদ্রঃ- ছবি এবং বর্ণনার সাথে পণ্যের মিল থাকা সত্যেও আপনি পণ্য গ্রহন করতে না চাইলে কুরিয়ার চার্জ ১২০ টাকা কুরিয়ার অফিসে প্রদান করে পণ্য আমাদের ঠিকানায় রিটার্ন করবেন। আমরা প্রয়োজনীয় ব্যবস্থা নিব।
                </p>
            </div>
        </div>
    );
};

export default DeliverInfo;