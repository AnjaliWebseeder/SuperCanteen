import { StyleSheet } from "react-native";
import { Height } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  loadingContainer:{
    flex:1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 16,
    fontFamily: 'Inter-SemiBold',
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 8,
    fontFamily: 'Inter-Regular',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: Height(23),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop:Height(-10),
    
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 12,
  },
  addressTypeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E6074',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  addressTypeText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
    fontFamily: 'Inter-SemiBold',
  },
  defaultBadge: {
    backgroundColor: '#27ae60',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  defaultBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Inter-Bold',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 12,
  },
  deleteButton: {},
  cardBody: {},
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    fontFamily: 'Inter-SemiBold',
  },
  contactText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
    fontFamily: 'Inter-Regular',
  },
  addressDetails: {
    flexDirection: 'row',
    marginTop: 12,
  },
  locationIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  addressText: {
    flex: 1,
    fontSize: 14,
    color: '#34495e',
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
  },
  addButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#2E6074',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontFamily: 'Inter-SemiBold',
  },
  selectedCard: {
  borderWidth: 1,
   borderColor: '#416E81',
    backgroundColor: '#f5f9fa',
},



});