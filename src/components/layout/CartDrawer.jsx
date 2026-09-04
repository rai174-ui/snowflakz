import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, CheckCircle2, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    removeCoupon,
    appliedCoupon,
    discountPercent,
    cartCount,
    subtotal,
    discountAmount,
    shippingFee,
    finalTotal,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    setCouponMsg(res);
  };

  const freeShippingThreshold = 499;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Drawer Window */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-slate-900 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl text-slate-100"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                  <h2 className="font-display font-bold text-xl text-slate-100">
                    Your Snack Basket ({cartCount})
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart"
                  className="p-2 text-slate-400 hover:text-white rounded-full glass-panel focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="py-4 border-b border-white/10">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Truck className="w-4 h-4 text-amber-400" />
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-emerald-400 font-bold">Free Express Shipping Unlocked!</span>
                    ) : (
                      <span>Add ₹{amountNeededForFreeShipping} more for FREE Shipping</span>
                    )}
                  </span>
                  <span className="font-bold text-amber-400">{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="mt-4 space-y-4 max-h-[45vh] overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                    <p className="text-slate-400 font-medium text-sm">Your basket is currently empty.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 px-5 py-2 rounded-full text-xs font-bold text-amber-400 border border-amber-400/30 hover:bg-amber-400/10 transition-colors"
                    >
                      Start Shopping Makhana
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="glass-panel p-3.5 rounded-2xl border border-white/10 flex gap-3.5 items-center justify-between"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-xl border border-white/10 shrink-0 bg-slate-800"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className="font-display font-bold text-sm text-slate-100 truncate">
                            {item.title}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.cartItemId)}
                            aria-label={`Remove ${item.title}`}
                            className="text-slate-500 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-[11px] font-mono text-amber-400 block mt-0.5">
                          {item.selectedWeight}
                        </span>

                        <div className="flex items-center justify-between mt-2">
                          <span className="font-display font-bold text-sm text-slate-200">
                            ₹{item.price * item.quantity}
                          </span>
                          <div className="flex items-center border border-white/10 rounded-lg glass-panel px-2 py-0.5">
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="text-slate-400 hover:text-white px-1 font-bold text-sm"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-mono font-bold text-amber-400">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="text-slate-400 hover:text-white px-1 font-bold text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Cart Footer Summary */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-3">
                {/* Promo Coupon Form */}
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <Tag className="w-3.5 h-3.5" />
                      {appliedCoupon} ({discountPercent}% OFF)
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-slate-400 hover:text-rose-400 transition-colors font-bold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code (e.g. SNOWFLAKZ25)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {couponMsg && (
                  <p className={`text-[11px] font-mono ${couponMsg.success ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {couponMsg.message}
                  </p>
                )}

                {/* Subtotal Calculations */}
                <div className="space-y-1.5 text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-slate-200">₹{subtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Discount ({discountPercent}%)</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Estimated Shipping</span>
                    <span className="text-slate-200">{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-display font-bold text-slate-100 pt-2 border-t border-white/10">
                    <span>Total Amount</span>
                    <span className="text-amber-400">₹{finalTotal}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => alert(`Proceeding to checkout with total amount ₹${finalTotal}. Thank you for choosing SNOWFLAKZ Makhana!`)}
                  className="w-full py-3.5 rounded-xl font-display font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
