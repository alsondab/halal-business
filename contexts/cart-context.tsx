"use client"
import type React from "react"
import { createContext, useContext, useMemo, useReducer } from "react"
import { getWhatsAppUrl } from "@/lib/data/catalog"

export interface CartItem { id: string; name: string; price: number; image: string; quantity: number; handle: string }
type State = { items: CartItem[]; isOpen: boolean }
type Action = { type: "ADD"; item: CartItem } | { type: "REMOVE"; id: string } | { type: "QUANTITY"; id: string; quantity: number } | { type: "CLEAR" } | { type: "TOGGLE" } | { type: "CLOSE" }
const reducer = (state: State, action: Action): State => { switch (action.type) { case "ADD": { const found = state.items.find((i) => i.id === action.item.id); return { ...state, items: found ? state.items.map((i) => i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i) : [...state.items, action.item] } } case "REMOVE": return { ...state, items: state.items.filter((i) => i.id !== action.id) }; case "QUANTITY": return { ...state, items: state.items.map((i) => i.id === action.id ? { ...i, quantity: action.quantity } : i).filter((i) => i.quantity > 0) }; case "CLEAR": return { ...state, items: [] }; case "TOGGLE": return { ...state, isOpen: !state.isOpen }; case "CLOSE": return { ...state, isOpen: false } } }
const CartContext = createContext<any>(null)
export function CartProvider({ children }: { children: React.ReactNode }) { const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false }); const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0); const value = useMemo(() => ({ state: { ...state, total, itemCount: state.items.reduce((sum, i) => sum + i.quantity, 0) }, dispatch, addItem: async (item: Omit<CartItem, "quantity">) => dispatch({ type: "ADD", item: { ...item, quantity: 1 } }), removeItem: async (id: string) => dispatch({ type: "REMOVE", id }), updateItemQuantity: async (id: string, quantity: number) => dispatch({ type: "QUANTITY", id, quantity }), clearShopifyCart: async () => dispatch({ type: "CLEAR" }), whatsappUrl: getWhatsAppUrl(state.items, total) }), [state, total]); return <CartContext.Provider value={value}>{children}</CartContext.Provider> }
export const useCart = () => useContext(CartContext)
